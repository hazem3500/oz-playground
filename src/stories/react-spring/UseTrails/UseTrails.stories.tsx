import React from 'react';
import BallTrail from './BallTrail/BallTrail';
import Skeleton from './Skeleton/Skeleton';

export default {
    title: 'react-spring/use-trails',
};

export const skeleton = () => <Skeleton />;
export const ballTrail = (args) => <BallTrail {...args} />;
ballTrail.args = {
    count: 25,
};
