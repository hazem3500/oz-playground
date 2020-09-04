import { Box, Stack } from '@chakra-ui/core';
import React, { useEffect, useRef } from 'react';
import { animated, useSpring, config } from 'react-spring';

export default function Scroll() {
    const containerRef = useRef();
    const [scroll, setScroll] = useSpring(() => ({
        scroll: 0,
    }));

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
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="yellow.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="red.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="green.400"
            ></Box>
            <Box flexShrink={0} height="100px" width="100%" bg="blue.400"></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="purple.400"
            ></Box>
            <Box
                flexShrink={0}
                height="100px"
                width="100%"
                bg="orange.400"
            ></Box>
        </animated.div>
    );
}
