// profile
import car from './static/image/profile/car/car.png';
import carI from './static/image/profile/car/car-i.png';
import carRG from './static/image/profile/car/car-rg.png';
import carRB from './static/image/profile/car/car-rb.png';
import carGB from './static/image/profile/car/car-gb.png';
// portraits
import portraitPixel from './static/image/portrait_pixel.jpg';
import portraitOriginal from './static/image/portrait_original.jpg';
// tattoos
import gameMachine from './static/image/tattoo/game_machine.png';
// stacks
import mongodb from './static/image/stack/mongodb.png';
import node from './static/image/stack/node.png';
import js from './static/image/stack/js.jpeg';
import python from './static/image/stack/python.png';
import react from './static/image/stack/react.png';
import vscode from './static/image/stack/vscode.png';
import flutter from './static/image/stack/flutter.png';
import { Texture } from 'pixi.js';

export const Assets = {
    profile: {
        car,
        carI,
        carRG,
        carRB,
        carGB,
    },
    portrait: {
        original: portraitOriginal,
        pixel: portraitPixel,
    },
    tattoo: { gameMachine },
    stack: { mongodb, node, js, python, react, vscode, flutter },
};

export const cssColor = {
    charcoal: '#262626',
    orange: '#F39B00',
    white: '#FFFFFF',
    program: {
        blue: '#000080',
        grey: `#c6c6c6`,
        lightBorder: '#FFFFFF',
        darkBorder: '#000000',
    },
};

export const nothing = null;
