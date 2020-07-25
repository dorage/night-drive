import React from 'react';
import ProfilePresenter from './profilePresenter';

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        };
    }

    componentDidMount() {
        const handleResize = () => {
            window.location.reload(false);
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        });
        window.addEventListener('resize', handleResize);
    }

    render() {
        const { windowWidth, windowHeight } = this.state;
        return (
            <ProfilePresenter
                windowWidth={windowWidth}
                windowHeight={windowHeight}
            />
        );
    }
}

export default Controller;
