import React from 'react';
import styled from 'styled-components';
import { Stage, Sprite } from '@inlet/react-pixi';
import { settings, SCALE_MODES } from 'pixi.js';
import { Assets } from '../../config';

settings.SCALE_MODE = SCALE_MODES.NEAREST;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// background color
// mouse drag move
// tattoo image
// interact - information popup
const Presenter = ({ windowWidth, windowHeight, mouseX }) => (
    <Container>
        <Stage
            width={windowWidth}
            height={windowHeight - 50}
            options={{ backgroundColor: 0xffffff }}
        >
            <Sprite
                pointerdown={onDragStart}
                pointerup={onDragEnd}
                pointerupoutside={onDragEnd}
                pointermove={onDragMove}
                image={Assets.tattoo.gameMachine}
                interactive={true}
                buttonMode={true}
                anchor={0.5}
                x={windowWidth / 2}
                y={windowHeight / 2}
            />
        </Stage>
    </Container>
);

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.dragging = true;
}
function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

export default Presenter;
