import { Box, Center } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from 'react';

export default {
    title: 'framer-motion/basics',
};

export const basic = () => (
    <Center minH="100vh">
        <Box
            as={motion.div}
            animate={{ scale: 2 }}
            height="100px"
            width="100px"
            bg="cornflowerblue"
            borderRadius="25px"
        ></Box>
    </Center>
);

export const keyFrames = () => (
    <Center minH="100vh">
        <Box
            as={motion.div}
            animate={{
                scale: [0.2, 2, 1.5],
                rotate: [0, 380, 360],
                borderRadius: ['50%', 25],
                x: [0, -150, 0, 150, 0, 0],
                y: [-150, 0, 150, 0, -150, 0],
            }}
            height="100px"
            width="100px"
            bg="cornflowerblue"
            borderRadius="25px"
        ></Box>
    </Center>
);
