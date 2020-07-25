import React from 'react';
import styled from 'styled-components';
import {
    Stage,
    Sprite,
    TilingSprite,
    Graphics,
    AppConsumer,
} from '@inlet/react-pixi';
import { Assets, PIXITexture } from '../../config';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    font-size: 32px;
    height: 50px;
    width: 100%;
    text-align: center;
    background-color: grey;
`;
const Content = styled.div`
    display: grid;
`;

// background color
// mouse drag move
// tattoo image
// interact - information popup
const Presenter = ({ windowWidth, windowHeight }) => (
    <Container>
        <Header>Project</Header>
        {/* header 높이 크기 */}
    </Container>
);

export default Presenter;
