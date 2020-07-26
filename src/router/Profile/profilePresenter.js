import React from 'react';
import styled from 'styled-components';
import { Stage, AppConsumer } from '@inlet/react-pixi';
import { settings, SCALE_MODES } from 'pixi.js';
import { screen } from '../../config';
import Ground from './component/ground';
import Car from './component/car';
import Portrait from '../../component/Portrait';

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const Container = styled.div`
    position: static;
    width: 100%;
    height: 100%;

    @media (max-width: ${screen.tablet}) {
        padding-top: 0px;
    }
`;
const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: calc(100vh);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding-top: 70px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0);
`;

const Presenter = ({ windowWidth, windowHeight }) => (
    <>
        <Overlay>
            <Portrait />
        </Overlay>
        <Container>
            <Stage
                width={windowWidth}
                height={windowHeight}
                options={{ backgroundColor: 0x000000 }}
            >
                <AppConsumer>
                    {(app) => {
                        app.renderer.autoDensity = true;
                        app.resize(windowWidth, windowHeight);
                        return (
                            <>
                                <Ground
                                    app={app}
                                    windowWidth={windowWidth}
                                    windowHeight={windowHeight}
                                />
                                <Car
                                    app={app}
                                    windowWidth={windowWidth}
                                    windowHeight={windowHeight}
                                />
                            </>
                        );
                    }}
                </AppConsumer>
            </Stage>
        </Container>
    </>
);

export default Presenter;
