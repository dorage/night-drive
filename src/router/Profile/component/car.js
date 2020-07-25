import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { Assets } from '../../../config';

class Car extends React.Component {
    constructor(props) {
        super(props);
        const { windowWidth } = props;
        this.state = {
            mouseX: 0.0,
            currentX: windowWidth / 2,
            oldX1: windowWidth / 2,
            oldX2: windowWidth / 2,
            oldX3: windowWidth / 2,
        };
    }

    lerp = 50.0;

    componentDidMount() {
        const { app } = this.props;
        app.ticker.add(this.tick);
        // 마우스 이벤트
        const handleMouseMove = (e) => {
            const posX = isNaN(e.pageX) ? 0.0 : e.pageX;
            this.setState({ mouseX: posX });
        };
        const handleTouchMove = (e) => {
            const posX = e.touches[0].clientX;
            this.setState({ mouseX: isNaN(posX) ? 0.0 : posX });
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchMove);
        window.addEventListener('touchmove', handleTouchMove);
    }

    tick = (delta) => {
        const { mouseX, currentX } = this.state;
        const newX = currentX + ((mouseX - currentX) * delta) / this.lerp;
        setTimeout(() => this.setState({ oldX1: newX }), 50);
        setTimeout(() => this.setState({ oldX2: newX }), 100);
        setTimeout(() => this.setState({ oldX3: newX }), 150);
        this.setState({
            currentX: newX,
        });
    };

    greenLine = (g, x1, y1, x2, y2, color) => {
        g.beginFill(0xffffff);
        g.lineStyle(4, color, 1);
        g.moveTo(x1, y1);
        g.lineTo(x2, y2);
        g.endFill();
    };

    render() {
        const { windowWidth, windowHeight } = this.props;
        const { currentX, oldX1, oldX2, oldX3 } = this.state;
        return (
            <>
                <Sprite
                    image={Assets.profile.carRG}
                    anchor={{ x: 0.5, y: 1 }}
                    scale={(3 / 1080) * windowHeight}
                    alpha={0.3}
                    x={oldX3}
                    y={(windowHeight * 2) / 3 + (windowHeight * 2) / 9}
                />
                <Sprite
                    image={Assets.profile.carGB}
                    anchor={{ x: 0.5, y: 1 }}
                    scale={(3 / 1080) * windowHeight}
                    alpha={0.3}
                    x={oldX2}
                    y={(windowHeight * 2) / 3 + (windowHeight * 2) / 9}
                />
                <Sprite
                    image={Assets.profile.carRB}
                    anchor={{ x: 0.5, y: 1 }}
                    scale={(3 / 1080) * windowHeight}
                    alpha={0.3}
                    x={oldX1}
                    y={(windowHeight * 2) / 3 + (windowHeight * 2) / 9}
                />
                <Sprite
                    image={Assets.profile.car}
                    anchor={{ x: 0.5, y: 1 }}
                    scale={(3 / 1080) * windowHeight}
                    x={currentX}
                    y={(windowHeight * 2) / 3 + (windowHeight * 2) / 9}
                />
            </>
        );
    }
}

export default Car;
