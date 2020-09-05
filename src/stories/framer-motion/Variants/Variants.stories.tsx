import { Center, keyframes } from '@chakra-ui/core';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import ShapeShifter from './ShapeShifter';

export default {
    title: 'framer-motion/variants',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

export const shapeShifter = () => <ShapeShifter />;
