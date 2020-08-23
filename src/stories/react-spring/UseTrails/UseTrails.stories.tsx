import React from 'react';
import BallTrail from './BallTrail/BallTrail';
import Skeleton from './Skeleton/Skeleton';

export default {
    title: 'react-spring/use-trails',
};

export const skeleton = () => <Skeleton />;
export const ballTrail = (args) => <BallTrail {...args} />;
ballTrail.args = {
    count: 5,
};
ballTrail.argTypes = {
    count: { control: { type: 'number', min: 1, max: 50 } },
};
