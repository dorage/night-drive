import React from 'react';
import styled from 'styled-components';
import Stack from '../../component/Stack';

const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 100px;
`;

const Header = styled.div`
    font-size: 32px;
    margin-bottom: 50px;
`;
const Content = styled.div`
    height: 80%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 300px 300px 300px;
    column-gap: 50px;
    row-gap: 15px;
`;

const Controller = () => {
    return (
        <Container>
            <Header>stack</Header>
            <Content>
                <Stack stack="flutter" />
                <Stack stack="js" />
                <Stack stack="mongodb" />
                <Stack stack="node" />
                <Stack stack="python" />
                <Stack stack="react" />
                <Stack stack="vscode" />
            </Content>
        </Container>
    );
};

export default Controller;
