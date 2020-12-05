import React from 'react';
import { Box, Center, Grid } from '@chakra-ui/react';
import CardFlip from './CardFlip/CardFlip';
import CardHover from './CardHover/CardHover';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'react-spring/use-spring',
};

export const cardFlip = () => <CardFlip />;

export const cardsFlip = () => {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, 200px)"
            gridGap="25px"
        >
            {[...Array(24)].map((_, i) => (
                <CardFlip
                    key={i}
                    foreground={'cornflowerblue'}
                    background={'red.500'}
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
