import { Box, Grid } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';

export default function Boxes() {
    const [active, setActive] = useState(false);
    const [springs] = useSprings(
        100,
        (index) => ({
            background: active ? 'red' : 'cornflowerblue',
            scale: active ? 3 : 1,
            rotate: active ? 360 : 0,
            delay: index * 5,
            config: {
                mass: 1,
                tension: 200,
                friction: 50,
            },
        }),
        [active]
    );
    return (
        <Grid
            gap="75px"
            templateColumns="repeat(auto-fit, 25px)"
            justifyContent="center"
            onClick={() => setActive(!active)}
        >
            {springs.map((props, i) => (
                <Box
                    key={i}
                    as={animated.div}
                    style={props}
                    h="25px"
                    w="25px"
                    bg="cornflowerblue"
                    borderRadius="5px"
                />
            ))}
        </Grid>
    );
}
