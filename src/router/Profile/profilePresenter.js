import React from 'react';
import styled from 'styled-components';
import { Stage, Sprite, AppConsumer } from '@inlet/react-pixi';
import { settings, SCALE_MODES } from 'pixi.js';
import { Assets } from '../../config';
import Ground from './component/ground';
import Car from './component/car';
import Portrait from '../../component/Portrait';

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const Container = styled.div`
    position: static;
    width: 100%;
    height: 100%;
    padding-top: 50px;
`;
const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    height: calc(100vh-50px);
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.div`
    color: white;
    font-size: 64px;
`;
const Birthday = styled.div`
    color: white;
    font-size: 48px;
`;
const Job = styled.div`
    color: white;
    font-size: 48px;
`;

// ticker 추가해서 마우스 이동 방향으로 차가 점점 움직이는 형태로 변경하기
const Presenter = ({ windowWidth, windowHeight }) => (
    <>
        <Overlay>
            <Portrait />
            <Name>KangHyun Lee</Name>
            <Birthday>1996.05.08</Birthday>
            <Job>Front-End Developer</Job>
        </Overlay>
        <Container>
            <Stage
                width={windowWidth}
                height={windowHeight - 50}
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
