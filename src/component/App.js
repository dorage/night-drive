import React from 'react';
import styled from 'styled-components';
import StyledReset from './StyledReset';
import Router from './Router';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const App = () => {
    return (
        <Container>
            <StyledReset />
            <Router />
        </Container>
    );
};

export default App;
