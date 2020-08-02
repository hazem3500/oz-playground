import { Center, Grid } from '@chakra-ui/core';
import React from 'react';
import DragBox from './DragBox/DragBox';
import PullRelease from './PullRelease/PullRelease';

export default {
    title: 'react-spring/with-react-use-gesture',
};

export const dragBox = () => {
    return (
        <Center minH="100vh">
            <DragBox />
        </Center>
    );
};
export const dragBoxes = () => {
    return (
        <Grid
            minH="100vh"
            templateColumns="repeat(auto-fit, 200px)"
            gap="25px"
            autoRow="200px"
            alignContent="center"
            justifyContent="center"
        >
            {[...Array(24)].map((_, i) => (
                <DragBox
                    key={i}
                    background={'cornflowerblue'}
                    activeBackground={'red'}
                />
            ))}
        </Grid>
    );
};

export const pullRelease = () => (
    <Center minH="100vh">
        <PullRelease />
    </Center>
);
