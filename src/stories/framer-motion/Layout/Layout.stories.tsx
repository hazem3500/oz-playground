import {
    Center,
    Button,
    Box,
    Stack,
    HStack,
    Heading,
    Flex,
    Grid,
} from '@chakra-ui/react';
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
                border="4px dashed"
                borderColor="blue.50"
                borderRadius="25px"
            >
                {new Array(3).fill(null).map((_, i) => (
                    <StyledMotionBox
                        key={i}
                        layout
                        bg={['blue.200', 'blue.400', 'blue.600'][i]}
                    />
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
        { id: 0, text: 'item 0', bg: 'blue.100' },
        { id: 1, text: 'item 1', bg: 'blue.300' },
        { id: 2, text: 'item 2', bg: 'blue.500' },
        { id: 3, text: 'item 3', bg: 'blue.700' },
        { id: 4, text: 'item 4', bg: 'blue.900' },
    ]);
    return (
        <Stack spacing={16}>
            <Stack sx={{ perspective: '600px' }} spacing={4}>
                {items.map((item, i) => (
                    <StyledMotionBox
                        layout
                        animate={{ scale: 0.8 + i * 0.1, rotateX: 15 + 15 * i }}
                        whileHover={{
                            rotateX: 0,
                            scale: 0.9 + i * 0.1,
                        }}
                        transition={{
                            type: 'spring',
                            mass: 2,
                            damping: 30,
                            stiffness: 100,
                        }}
                        boxShadow={['xs', 'sm', 'md', 'lg', 'xl'][i]}
                        key={item.id}
                        bg={item.bg}
                        w="md"
                    ></StyledMotionBox>
                ))}
            </Stack>
            <Button
                colorScheme="blue"
                size="lg"
                onClick={() => setItems(shuffle(items))}
            >
                Shuffle
            </Button>
        </Stack>
    );
};
