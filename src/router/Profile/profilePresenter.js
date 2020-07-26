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
    width: 100vw;
    height: ${(props) => `${props.height}px`};
    background-color: hotpink;
`;
const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: 80vh;
    top: 50px;
    left: 0;
    z-index: 2;
    padding-top: 20px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

const Presenter = ({ windowWidth, windowHeight }) => (
    <Container height={windowHeight}>
        <Overlay>
            <Portrait />
        </Overlay>
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
);

export default Presenter;
