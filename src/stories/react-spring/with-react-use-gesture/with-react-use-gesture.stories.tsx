import { Center, Grid } from '@chakra-ui/core';
import React from 'react';
import DragBox from './DragBox/DragBox';
import PullRelease from './PullRelease/PullRelease';
import colors from 'nice-color-palettes/500';

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
    const palette = colors[Math.floor(Math.random() * colors.length)];
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
                    background={
                        palette[
                            Math.floor(Math.random() * (palette.length - 1))
                        ]
                    }
                    activeBackground={
                        palette[
                            Math.floor(Math.random() * (palette.length - 1))
                        ]
                    }
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
