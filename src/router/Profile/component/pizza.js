import React from 'react';
import { Sprite } from '@inlet/react-pixi';
import { Assets } from '../../../config';

class Pizza extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invert: false,
            display: true,
            x: 500,
            y: 0.0,
            velocity: 0.0,
            scale: 0.0,
            zIndex: 0,
        };
    }

    componentDidMount() {
        const { app } = this.props;
        app.ticker.add(this.tick);
        setInterval(this.invertSprite, 500);
    }

    randomStart = () => {
        const { windowWidth, windowHeight } = this.props;
        const random = Math.floor(Math.random() * 10);
        const newX =
            windowWidth * random * 0.1 + ((3 / 1080) * windowHeight) / 2;
        console.log(newX);
        this.setState({ x: newX, dy: 0, dscale: 0, zIndex: 0.0 });
    };

    getNewY = (dy) => {
        const { windowHeight } = this.props;
        const newDy = dy * dy * (3 / windowHeight) + (2 * windowHeight) / 3;
        return newDy;
    };

    tick = (delta) => {
        const { windowHeight } = this.props;
        const { velocity, scale } = this.state;
        var count = 1 * delta;
        var dy = velocity + count;
        var newScale = dy / (windowHeight / 3);
        var passedCar =
            (windowHeight * 2) / 3 + dy >
            (windowHeight * 2) / 3 + (windowHeight * 2) / 9;
        if (dy > (windowHeight * 2) / 3) {
            this.randomStart();
        } else {
            this.setState({
                y: this.getNewY(dy),
                velocity: dy,
                scale: newScale > 1 ? 1 : newScale,
                zIndex: passedCar ? 2 : 0,
            });
        }
    };

    invertSprite = () => {
        const { invert } = this.state;
        this.setState({
            invert: !invert,
        });
    };

    render() {
        const { windowWidth, windowHeight } = this.props;
        const { invert, scale, x, y, zIndex } = this.state;
        return (
            <Sprite
                ref={(obj) => (window.pizza = obj)}
                image={invert ? Assets.profile.itemI : Assets.profile.item}
                anchor={{ x: 0.5, y: 1 }}
                scale={(3 / 1080) * windowHeight * (0.1 + scale)}
                x={x}
                y={y}
                zIndex={zIndex}
            />
        );
    }
}

export default Pizza;
