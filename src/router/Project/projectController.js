import React from 'react';
import ProjectPresenter from './projectPresenter';

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <ProjectPresenter />;
    }
}

export default Controller;
