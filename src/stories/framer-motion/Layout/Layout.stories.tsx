import {
    Center,
    Button,
    Box,
    Stack,
    HStack,
    Heading,
    Flex,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import StyledMotionBox from '../../../components/StyledMotionBox/StyledMotionBox';
import { useAnimation } from 'framer-motion';

export default {
    title: 'framer-motion/layout',
    decorators: [
        (Story) => (
            <Center minH="100vh">
                <Story />
            </Center>
        ),
    ],
};

export const flex = () => {
    const justifyValues = [
        'flex-start',
        'center',
        'space-evenly',
        'space-around',
        'space-between',
        'flex-end',
    ];
    const [currJustifyValue, setCurrJustifyValue] = useState(justifyValues[0]);
    return (
        <Stack spacing={16}>
            <Flex
                justify={currJustifyValue}
                border="4px solid"
                borderColor="blue.200"
                borderRadius="25px"
            >
                {new Array(3).fill(null).map((_, i) => (
                    <StyledMotionBox key={i} layout />
                ))}
            </Flex>
            <HStack>
                {justifyValues.map((justifyValue, i) => (
                    <Button
                        key={i}
                        onClick={() => setCurrJustifyValue(justifyValue)}
                        colorScheme={
                            justifyValue === currJustifyValue ? 'blue' : 'gray'
                        }
                    >
                        {justifyValue}
                    </Button>
                ))}
            </HStack>
        </Stack>
    );
};
