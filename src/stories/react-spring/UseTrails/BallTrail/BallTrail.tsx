import { Box } from '@chakra-ui/core';
import React from 'react';
import { useTrail, animated, config } from 'react-spring';
import { useMove } from 'react-use-gesture';

export default function BallTrail({ count = 25 }) {
    const [trail, set] = useTrail(count, () => ({
        x: 0,
        y: 0,
        o: 0,
        config: config.gentle,
    }));
    const bind = useMove(({ xy: [x, y], velocity }) =>
        set({ x: x - 25, y: y - 25, o: velocity })
    );
    return (
        <Box {...bind()} minHeight="100vh">
            {trail.map(({ x, y, o }, i) => (
                <Box
                    position="absolute"
                    key={i}
                    as={animated.div}
                    style={{
                        x,
                        y,
                        backgroundColor: o.to(
                            [0, 0.8, 1],
                            ['cornflowerblue', '#34F6F2', '#FFBC42']
                        ),
                        scale: o.to([0, 1], [1, 0.8]),
                    }}
                    bg="cornflowerblue"
                    height="50px"
                    width="50px"
                    borderRadius="50%"
                />
            ))}
        </Box>
    );
}
