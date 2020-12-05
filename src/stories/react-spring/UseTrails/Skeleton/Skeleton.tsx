import { Box, Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { animated, useTrail } from 'react-spring';

export default function Skeleton() {
    const [active, setActive] = useState(false);
    const trail = useTrail(25, {
        scaleX: active ? 1 : 0.2,
        scaleY: active ? 1 : 4,
        scaleZ: active ? 1 : 2,
        rotateY: active ? 360 : 0,
        o: active ? 1 : 0,
        config: {
            mass: 2,
            friction: 50,
            tension: 400,
        },
    });
    return (
        <Grid
            gap="25px"
            style={{ perspective: '4000px' }}
            justifyItems="center"
            onClick={() => setActive(!active)}
        >
            {trail.map(({ scaleX, scaleY, rotateY, o }, i) => (
                <Box
                    key={i}
                    as={animated.div}
                    style={{
                        scaleX,
                        scaleY,
                        rotateY,
                        backgroundColor: o.to(
                            [0, 1],
                            ['#FFBC42', 'cornflowerblue']
                        ),
                    }}
                    height="10px"
                    width="25%"
                />
            ))}
        </Grid>
    );
}
