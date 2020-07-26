import React from 'react';
import styled from 'styled-components';
import { stacks, screen } from '../../config';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    padding-right: 20px;
    padding-left: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 350px));
    justify-content: center;
    align-items: center;
    overflow: scroll;
`;
const Header = styled.div`
    font-size: 24px;
`;

const Stack = styled.div`
    width: 300px;
    margin: 10px 20px;

    display: flex;

    @media (max-width: ${screen.desktopS}) {
        width: 100%;
    }
`;

const Icon = styled.div`
    width: 25vw;
    height: 25vw;

    background-image: url(${(props) => props.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
const Info = styled.div`
    width: 100%;
    padding-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 20px;
`;
const Name = styled.div``;
const Level = styled.div`
    font-size: 24px;
`;

const getLevel = (level) => {
    return '■'.repeat(level) + '□'.repeat(5 - level);
};

const Presenter = () => (
    <Container>
        {stacks.map((elem) => (
            <Stack>
                <Icon src={elem.src} />
                <Info>
                    <Name>{elem.name}</Name>
                    <Level>{getLevel(elem.level)}</Level>
                </Info>
            </Stack>
        ))}
    </Container>
);

export default Presenter;
