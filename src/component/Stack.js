import React from 'react';
import styled from 'styled-components';
import { Assets } from '../config';

const GridItem = styled.div``;

const Container = styled.div`
    text-align: center;
    :hover {
        cursor: pointer;
        color: blue;
    }
`;

const Icon = styled.img``;

const Name = styled.p``;

const Stack = ({ stack }) => {
    return (
        <GridItem>
            <Container onClick={() => console.log('hello')}>
                <Icon draggable="false" src={Assets.stack[stack]} />
                <Name>{stack}</Name>
            </Container>
        </GridItem>
    );
};

export default Stack;
