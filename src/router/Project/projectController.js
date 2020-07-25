import React from 'react';
import ProjectPresenter from './projectPresenter';

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
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
        const { windowWidth, windowHeight } = this.state;

        return (
            <ProjectPresenter
                tick={this.tick}
                windowWidth={windowWidth}
                windowHeight={windowHeight}
            />
        );
    }
}

export default Controller;
