import { Center, keyframes } from '@chakra-ui/core';
import React from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';

export default {
    title: 'framer-motion/basics',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

const template = (args) => (
    <MotionBox
        height="100px"
        width="100px"
        bg="dodgerblue"
        borderRadius="25px"
        {...args}
    ></MotionBox>
);

export const basic = template.bind({});
basic.args = {
    animate: {
        scale: 2,
    },
};

export const keyFrames = template.bind({});
keyFrames.args = {
    animate: {
        scale: [0.2, 2, 1.5],
        rotate: [0, 380, 360],
        borderRadius: ['50%', '25px'],
        x: [0, -150, 0, 150, 0, 0],
        y: [-150, 0, 150, 0, -150, 0],
        backgroundColor: ['#FFBC42', '#34F6F2', '#1e90ff'],
    },
    transition: {
        duration: 1,
    },
};
