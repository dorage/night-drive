// profile
import car from './static/image/profile/car/car.png';
import carI from './static/image/profile/car/car-i.png';
import carRG from './static/image/profile/car/car-rg.png';
import carRB from './static/image/profile/car/car-rb.png';
import carGB from './static/image/profile/car/car-gb.png';
import item from './static/image/profile/car/item.png';
import itemI from './static/image/profile/car/item-invert.png';
// portraits
import portraitPixel from './static/image/portrait_pixel.jpg';
import portraitOriginal from './static/image/portrait_original.jpg';
// tattoos
import gameMachine from './static/image/tattoo/game_machine.png';
// stacks
import border from './static/image/stack/border.png';
import mongodb from './static/image/stack/mongodb.png';
import node from './static/image/stack/node.png';
import js from './static/image/stack/js.png';
import python from './static/image/stack/python.png';
import react from './static/image/stack/react.png';
import vscode from './static/image/stack/vscode.png';
import flutter from './static/image/stack/flutter.png';
import dart from './static/image/stack/dart.png';
import html from './static/image/stack/html.png';
import css from './static/image/stack/css.png';
import unity from './static/image/stack/unity.png';

export const Assets = {
    profile: {
        car,
        carI,
        carRG,
        carRB,
        carGB,
        item,
        itemI,
    },
    portrait: {
        original: portraitOriginal,
        pixel: portraitPixel,
    },
    tattoo: { gameMachine },
    stack: {
        border,
        mongodb,
        node,
        js,
        python,
        react,
        vscode,
        flutter,
        dart,
        html,
        css,
        unity,
    },
};

export const screen = {
    desktopL: '1920px',
    desktopM: '1440px',
    desktopS: '1024px',
    tablet: '768px',
    mobileL: '425px',
    mobileM: '375px',
    mobileS: '320px',
};

export const device = {
    desktopL: `(min-width: ${screen.desktopL})`,
    desktopM: `(min-width: ${screen.desktopM})`,
    desktopS: `(min-width: ${screen.desktopS})`,
    tablet: `(min-width: ${screen.tablet})`,
    mobileL: `(min-width: ${screen.mobileL})`,
    mobileM: `(min-width: ${screen.mobileM})`,
    mobileS: `(min-width: ${screen.mobileS})`,
};

export const cssColor = {
    charcoal: '#262626',
    orange: '#F39B00',
    white: '#FFFFFF',
    program: {
        blue: '#000080',
        grey: `#c6c6c6`,
        darkGrey: `#dddddd`,
        lightBorder: '#FFFFFF',
        darkBorder: '#000000',
    },
};

export const stacks = [
    { src: Assets.stack.html, name: 'HTML', level: 3 },
    { src: Assets.stack.css, name: 'CSS', level: 2 },
    { src: Assets.stack.flutter, name: 'Flutter', level: 2 },
    { src: Assets.stack.dart, name: 'Dart', level: 1 },
    { src: Assets.stack.react, name: 'ReactJS', level: 2 },
    { src: Assets.stack.python, name: 'Python', level: 2 },
    { src: Assets.stack.js, name: 'JS ES6', level: 2 },
    { src: Assets.stack.mongodb, name: 'MongoDB', level: 2 },
    { src: Assets.stack.unity, name: 'Unity', level: 2 },
];
