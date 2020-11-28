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
import { shuffle, sample } from 'lodash';
import { v4 as uuid } from 'uuid';

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

export const grid = ({ initialNumOfBoxes = 10 }) => {
    const [numOfBoxes, setNumOfBoxes] = useState(10);
    function generateBox() {
        return {
            id: uuid(),
            bg: sample([
                'blue.100',
                'blue.200',
                'blue.300',
                'blue.400',
                'blue.500',
                'blue.600',
                'blue.700',
                'blue.800',
                'blue.900',
            ]),
        };
    }

    const [boxes, setBoxes] = useState(() =>
        Array.from({ length: initialNumOfBoxes }, generateBox)
    );

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
                    {boxes.map((box, i) => (
                        <StyledMotionBox
                            key={box.id}
                            bg={box.bg}
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
                <Heading size="md">Boxes({boxes.length}): </Heading>
                <Button
                    onClick={() =>
                        boxes.length > 1 &&
                        setBoxes(boxes.slice(0, boxes.length - 1))
                    }
                >
                    Remove -
                </Button>
                <Button onClick={() => setBoxes([...boxes, generateBox()])}>
                    Add +
                </Button>
                <Button
                    colorScheme="blue"
                    onClick={() => setBoxes(shuffle(boxes))}
                >
                    Shuffle
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
