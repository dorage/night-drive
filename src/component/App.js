import React from 'react';
import styled from 'styled-components';
import StyledReset from './StyledReset';
import Router from './Router';

const Container = styled.div``;

const App = () => {
    return (
        <Container>
            <StyledReset />
            <Router />
        </Container>
    );
};

export default App;
