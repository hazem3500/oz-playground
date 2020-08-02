import React from 'react';
import { Box, Center, Grid } from '@chakra-ui/core';
import CardFlip from './CardFlip/CardFlip';
import CardHover from './CardHover/CardHover';
import colors from 'nice-color-palettes/500';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'react-spring/use-spring',
};

export const cardFlip = () => <CardFlip />;

export const cardsFlip = () => {
    const palette = colors[Math.floor(Math.random() * colors.length)];
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, 200px)"
            gridGap="25px"
        >
            {[...Array(24)].map((_, i) => (
                <CardFlip
                    key={i}
                    foreground={
                        palette[
                            Math.floor(Math.random() * (palette.length - 1))
                        ]
                    }
                    background={
                        palette[
                            Math.floor(Math.random() * (palette.length - 1))
                        ]
                    }
                />
            ))}
        </Box>
    );
};

export const cardHover = () => (
    <Center minH="100vh">
        <CardHover />
    </Center>
);
