import React from 'react';
import styled from 'styled-components';
import { Assets, device, screen } from '../config';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 60vh;
`;

const Image = styled.div`
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media ${device.max} {
        width: 20vw;
        height: 45vh;
    }
    @media ${device.desktopL} {
        width: 20vw;
        height: 45vh;
    }
    @media ${device.desktopM} {
        width: 20vw;
        height: 60vh;
    }
    @media ${device.desktopS} {
        width: 90vw;
        height: 500px;
    }
    @media ${device.tablet} {
        width: 70vw;
        height: 80%;
    }
    @media ${device.mobileL} {
        width: 100vw;
        height: 80%;
    }
    @media ${device.mobileM} {
        width: 100vw;
        height: 80%;
    }
    @media ${device.mobileS} {
        width: 100vw;
        height: 70%;
    }
    @media (max-width: ${screen.mobileS}) {
        width: 100vw;
        height: 70%;
    }
`;

const Name = styled.div`
    color: white;
    padding: 0 10px;

    @media ${device.max} {
        font-size: 64px;
    }
    @media ${device.desktopL} {
        font-size: 64px;
        margin-bottom: 10px;
    }
    @media ${device.desktopM} {
        font-size: 64px;
        margin-bottom: 10px;
    }
    @media ${device.desktopS} {
        font-size: 64px;
        margin-bottom: 10px;
    }
    @media ${device.tablet} {
        font-size: 60px;
    }
    @media ${device.mobileL} {
        font-size: 60px;
    }
    @media ${device.mobileM} {
        font-size: 48px;
    }
    @media ${device.mobileS} {
        font-size: 40px;
    }
    @media (max-width: ${screen.mobileS}) {
        font-size: 28px;
    }
`;
const Description = styled.div`
    color: white;
    padding: 0 10px;

    @media ${device.max} {
        font-size: 64px;
    }
    @media ${device.desktopL} {
        font-size: 64px;
    }
    @media ${device.desktopM} {
        font-size: 64px;
    }
    @media ${device.desktopS} {
        font-size: 64px;
    }
    @media ${device.tablet} {
        font-size: 24px;
    }
    @media ${device.mobileL} {
        font-size: 32px;
    }
    @media ${device.mobileM} {
        font-size: 32px;
    }
    @media ${device.mobileS} {
        font-size: 28px;
    }
    @media (max-width: ${screen.mobileS}) {
        font-size: 22px;
    }
`;

const Portrait = () => {
    return (
        <Container>
            <Image src={Assets.portrait.pixel} />
            <Name>KangHyun Lee</Name>
            <Description>Front-End Developer</Description>
        </Container>
    );
};

export default Portrait;
