import { Box, Stack } from '@chakra-ui/core';
import React, { useEffect, useRef } from 'react';
import { animated, useSpring, config } from 'react-spring';

export default function Scroll() {
    const containerRef = useRef();
    const [scroll, setScroll] = useSpring(() => ({
        scroll: 0,
    }));

    console.log(config);

    useEffect(() => {
        setScroll({
            from: { scroll: 0 },
            to: { scroll: containerRef.current.scrollHeight },
            loop: { reverse: true },
            onChange: (props) => {
                if (containerRef.current)
                    containerRef.current.scroll(0, props.scroll);
            },
            config: {
                tension: 500,
                friction: 500,
                mass: 400,
            },
        });
    }, []);

    return (
        <animated.div
            ref={containerRef}
            style={{ maxHeight: '400px', overflowY: 'scroll' }}
        >
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="yellow"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="green"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="purple"></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="orange"></Box>
        </animated.div>
    );
}