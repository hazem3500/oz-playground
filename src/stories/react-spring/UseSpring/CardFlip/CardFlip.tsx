import React, { useState } from 'react';
import { Box } from '@chakra-ui/core';
import { animated, useSpring } from 'react-spring';

export default function CardFlip({
    foreground = 'cornflowerblue',
    background = 'red',
}) {
    const [flipped, setFlipped] = useState(false);
    const { opacity, transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {
            mass: 5,
        },
    });
    return (
        <Box
            position="relative"
            height="200px"
            width="200px"
            onClick={() => setFlipped(!flipped)}
        >
            <Box
                as={animated.div}
                position="absolute"
                top="0"
                left="0"
                borderRadius="25px"
                bg={foreground}
                height="200px"
                width="200px"
                style={{
                    opacity: opacity.interpolate((o) => 1 - o),
                    transform,
                }}
            ></Box>
            <Box
                as={animated.div}
                position="absolute"
                top="0"
                left="0"
                borderRadius="25px"
                bg={background}
                height="200px"
                width="200px"
                style={{ opacity, transform }}
            ></Box>
        </Box>
    );
}
