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
import React, { useState } from 'react';
import MotionBox from '../../../components/MotionBox/MotionBox';
import StyledMotionBox from '../../../components/StyledMotionBox/StyledMotionBox';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { shuffle } from 'lodash';

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

export const grid = () => {
    const [numOfBoxes, setNumOfBoxes] = useState(10);

    const item = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
    };

    return (
        <Stack spacing={16} w="full">
            <Grid
                justifyItems="center"
                templateColumns="repeat(5, 1fr)"
                gap={6}
                w="full"
            >
                <AnimatePresence>
                    {new Array(numOfBoxes).fill(null).map((_, i) => (
                        <StyledMotionBox
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={item}
                            layout
                        />
                    ))}
                </AnimatePresence>
            </Grid>
            <HStack>
                <Heading size="md">Boxes({numOfBoxes}): </Heading>
                <Button
                    onClick={() =>
                        numOfBoxes > 1 && setNumOfBoxes(numOfBoxes - 1)
                    }
                >
                    Remove -
                </Button>
                <Button onClick={() => setNumOfBoxes(numOfBoxes + 1)}>
                    Add +
                </Button>
            </HStack>
        </Stack>
    );
};

export const list = () => {
    const [items, setItems] = useState([
        { id: 0, text: 'item 0', bg: 'blue.400' },
        { id: 1, text: 'item 1', bg: 'teal.400' },
        { id: 2, text: 'item 2', bg: 'cyan.400' },
        { id: 3, text: 'item 3', bg: 'pink.400' },
        { id: 4, text: 'item 4', bg: 'purple.400' },
    ]);
    return (
        <Stack spacing={16}>
            <Stack>
                {items.map((item) => (
                    <StyledMotionBox key={item.id} w="md" layout bg={item.bg}>
                        <Heading size="md">{item.text}</Heading>
                    </StyledMotionBox>
                ))}
            </Stack>
            <Button colorScheme="blue" onClick={() => setItems(shuffle(items))}>
                Shuffle
            </Button>
        </Stack>
    );
};
