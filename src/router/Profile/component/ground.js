import React from 'react';
import styled from 'styled-components';
import { Graphics } from '@inlet/react-pixi';
import { Assets, PIXITexture } from '../../../config';

class Ground extends React.Component {
    count = 0;
    state = {
        velocity: 0.0,
    };

    componentDidMount() {
        const { app } = this.props;
        app.ticker.add(this.tick);
    }

    tick = (delta) => {
        const { velocity } = this.state;
        var count = 1 * delta;
        this.setState({ velocity: velocity + count });
    };

    greenLine = (g, x1, y1, x2, y2, color) => {
        g.beginFill(0xffffff);
        g.lineStyle(4, color, 1);
        g.moveTo(x1, y1);
        g.lineTo(x2, y2);
        g.endFill();
    };

    getDy = (y, windowHeight, maxHeight) => {
        //const currentY = (3 / windowHeight) * y * y;
        const currentY = y > windowHeight / 3 ? y % (windowHeight / 3) : y;
        const dy = currentY * currentY * (3 / windowHeight) + maxHeight;
    };

    render() {
        const { app, windowWidth, windowHeight } = this.props;
        const { velocity } = this.state;
        return (
            <Graphics
                app={app}
                draw={(g) => {
                    g.clear();
                    const startY = (windowHeight * 2) / 3;
                    // 가로선
                    for (var i = 0; i < 10; i++) {
                        const y =
                            (i * windowHeight) / 3 / 10 +
                            // 가변
                            velocity;
                        //const currentY = (3 / windowHeight) * y * y;
                        const currentY =
                            y > windowHeight / 3 ? y % (windowHeight / 3) : y;
                        const dy =
                            currentY * currentY * (3 / windowHeight) + startY;
                        const color = Math.round(
                            (dy / (windowHeight / 3)) * 255,
                        ).toString(16);
                        this.greenLine(
                            g,
                            0,
                            dy,
                            windowWidth,
                            dy,
                            `0x${color}${color}ff`,
                        );
                    }
                    // 지평선
                    this.greenLine(
                        g,
                        0,
                        startY,
                        windowWidth,
                        startY,
                        '0xff00ff',
                    );
                    // 세로선
                    /*
                    const maxVertical = Math.round(49);
                    const multipleWidth = 5;
                    for (var i = 0; i < maxVertical; i++) {
                        this.greenLine(
                            g,
                            (windowWidth * (i + 1)) / (maxVertical + 2),
                            maxHeight,
                            (windowWidth * multipleWidth * i) / maxVertical -
                                (windowWidth * (multipleWidth - 1)) / 2,
                            windowHeight,
                        );
                    }
                    */
                }}
            />
        );
    }
}

export default Ground;
