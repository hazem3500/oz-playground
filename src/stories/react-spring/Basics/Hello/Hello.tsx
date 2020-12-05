import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Heading } from '@chakra-ui/react';

export default function Hello({ children }) {
    const props = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        loop: { reverse: true },
    });
    return (
        <Heading as={animated.h1} style={props}>
            {children}
        </Heading>
    );
}
