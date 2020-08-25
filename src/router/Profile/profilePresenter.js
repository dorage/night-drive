import React from 'react';
import styled from 'styled-components';
import { Stage, AppConsumer, Container } from '@inlet/react-pixi';
import { settings, SCALE_MODES } from 'pixi.js';
import Ground from './component/ground';
import Car from './component/car';
import Pizza from './component/pizza';
import Portrait from '../../component/Portrait';

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const PresenterContainer = styled.div`
    position: static;
    width: 100vw;
    height: ${(props) => `${props.height}px`};
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
    <PresenterContainer height={windowHeight}>
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
                        <Container sortableChildren={true}>
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
                        </Container>
                    );
                }}
            </AppConsumer>
        </Stage>
    </PresenterContainer>
);

export default Presenter;
