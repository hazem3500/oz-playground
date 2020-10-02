import React from 'react';
import '../r3f.css';
import { _01 } from './01/01';
import { _02 } from './02/02';
import { _03 } from './03/03';
import { _04 } from './04/04';

export default {
    title: 'react-three-fiber/basics',
};

export const _01_rotatingBox = () => <_01 />;

export const _02_boxWithCamera = () => <_02 />;

export const _03_cubeGrid = (args) => <_03 {...args} />;
_03_cubeGrid.args = {
    size: 6,
};

export const _04_CubeGrid3d = (args) => <_04 {...args} />;
_04_CubeGrid3d.args = {
    size: 6,
};
