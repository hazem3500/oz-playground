import React from 'react';
import Sparkles from './Sparkles';
import { Box, Text } from '@chakra-ui/react';

export default {
    title: 'random/sparkles',
    component: Sparkles,
};

export const text = () => <Sparkles>hello</Sparkles>;
export const box = () => (
    <Sparkles>
        <Box h="200px" w="200px" bg="dodgerblue" borderRadius="25px" />
    </Sparkles>
);
export const customSparkle = () => (
    <Sparkles
        SparkleComponent={({ size, color }) => (
            <Box h={size} w={size} bg={color} borderRadius="50%" />
        )}
    >
        <Box h="200px" w="200px" bg="dodgerblue" borderRadius="25px" />
    </Sparkles>
);

export const EmojiSparkle = () => (
    <Sparkles SparkleComponent={({ size }) => <Text fontSize={size}>🌟</Text>}>
        <Box h="200px" w="200px" bg="dodgerblue" borderRadius="25px" />
    </Sparkles>
);
