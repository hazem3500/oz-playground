import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import Boxes from './Boxes/Boxes';
import Draggable from './Draggable/Draggable';

export default {
    title: 'react-spring/use-springs',
};

export const boxes = () => (
    <Box m="100px">
        <Boxes />
    </Box>
);

export const draggableList = () => (
    <Center minHeight="100vh">
        <Draggable items={['hello', 'no', 'potato', 'tomato']} />
    </Center>
);
