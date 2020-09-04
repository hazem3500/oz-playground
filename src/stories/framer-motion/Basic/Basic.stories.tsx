import { Center } from '@chakra-ui/core';
import React from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';

export default {
    title: 'framer-motion/basics',
};

export const basic = () => (
    <Center minH="100vh">
        <MotionBox
            animate={{ scale: 2 }}
            height="100px"
            width="100px"
            bg="dodgerblue"
            borderRadius="25px"
        ></MotionBox>
    </Center>
);

export const keyFrames = () => (
    <Center minH="100vh">
        <MotionBox
            animate={{
                scale: [0.2, 2, 1.5],
                rotate: [0, 380, 360],
                borderRadius: ['50%', '25px'],
                x: [0, -150, 0, 150, 0, 0],
                y: [-150, 0, 150, 0, -150, 0],
                backgroundColor: ['#FFBC42', '#34F6F2', '#1e90ff'],
            }}
            transition={{ duration: 1 }}
            height="100px"
            width="100px"
            bg="dodgerblue"
            borderRadius="25px"
        ></MotionBox>
    </Center>
);
