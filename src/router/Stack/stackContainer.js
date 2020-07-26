import React from 'react';
import StackPresenter from './stackPresenter';

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <StackPresenter />;
    }
}

export default Controller;
