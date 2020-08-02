import React from 'react';
import { text } from '@storybook/addon-knobs';
import Hello from './Hello/Hello';
import InnerText from './InnerText/InnerText';
import KeyFrames from './KeyFrames/KeyFrames';
import Scroll from './Scroll/Scroll';
import SVG from './SVG/SVG';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'react-spring/basics',
};

export const hello = () => <Hello>{text('text', 'hello')}</Hello>;
export const innerText = () => <InnerText />;
export const keyFrames = () => <KeyFrames />;
export const scroll = () => <Scroll />;
export const svg = () => <SVG path={text('path', 'M2,4 L44,4 2,42 44,42Z')} />;
