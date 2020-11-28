import {
    Center,
    Button,
    Box,
    Stack,
    HStack,
    Heading,
    Flex,
    Grid,
} from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import StyledMotionBox from '../../../components/StyledMotionBox/StyledMotionBox';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { shuffle, sample } from 'lodash';
import { v4 as uuid } from 'uuid';

export default {
    title: 'framer-motion/gestures',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

export const whileHover = () => (
    <StyledMotionBox whileHover={{ scale: 3, backgroundColor: '#805AD5' }} />
);

export const whileTap = () => (
    <StyledMotionBox
        initial={{
            scale: 3,
        }}
        whileTap={{
            scale: 1,
            borderRadius: '50%',
            backgroundColor: '#D53F8C',
            filter: 'blur(5px)',
        }}
    />
);

export const drag = () => <StyledMotionBox drag />;
export const dragX = () => <StyledMotionBox drag="x" />;
export const dragY = () => <StyledMotionBox drag="y" />;

export const dragWithConstrains = () => {
    const constraintsRef = useRef(null);

    return (
        <MotionBox
            ref={constraintsRef}
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="2px dashed"
            borderColor="blue.100"
            bg="blue.50"
            boxSize="lg"
            borderRadius="25px"
        >
            <StyledMotionBox drag dragConstraints={constraintsRef} />
        </MotionBox>
    );
};
