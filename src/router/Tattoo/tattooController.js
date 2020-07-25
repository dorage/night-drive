import React from 'react';
import TattooPresenter from './tattooPresenter';

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            mouseX: 0.0,
            verticalLineY: 0.0,
            x: 0.0,
            y: 0.0,
        };
    }

    componentWillMount() {
        const handleResize = () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        const handleMouseMove = (e) => {
            const posX = e.pageX;
            this.setState({ mouseX: isNaN(posX) ? 0.0 : posX });
        };
        const handleTouchMove = (e) => {
            console.log(e.touches[0].clientX);
            const posX = e.touches[0].clientX;
            this.setState({ mouseX: isNaN(posX) ? 0.0 : posX });
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchstart', handleTouchMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('resize', handleResize);
        console.log('componentWillMount');
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        });
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        const { windowWidth, windowHeight, mouseX } = this.state;
        return (
            <TattooPresenter
                windowWidth={windowWidth}
                windowHeight={windowHeight}
                mouseX={mouseX}
            />
        );
    }
}

export default Controller;
