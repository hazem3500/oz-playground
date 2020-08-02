import { Box } from '@chakra-ui/core';
import React from 'react';
import Boxes from './Boxes/Boxes';

export default {
    title: 'react-spring/use-springs',
};

export const boxes = () => (
    <Box m="100px">
        <Boxes />
    </Box>
);
