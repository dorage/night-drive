import React from 'react';
import styled from 'styled-components';
import { Assets } from '../config';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px;
`;

const Image = styled.div`
    background-image: url(${(props) => props.original});
    width: 20vw;
    height: 500px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const Portrait = () => {
    return (
        <Container>
            <Image
                original={Assets.portrait.pixel}
                hover={Assets.portrait.original}
            />
        </Container>
    );
};

export default Portrait;
