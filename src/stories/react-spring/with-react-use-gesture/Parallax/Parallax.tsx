import { Box } from '@chakra-ui/core';
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export default function Parallax() {
    const [props, set] = useSpring(() => ({
        x: 0,
        y: 0,
        active: 0,
    }));
    const { x, y, active } = props;
    const bind = useGesture({
        onMove: ({ movement: [ox, oy] }) => set({ x: ox, y: oy }),
        onHover: ({ hovering }) => set({ active: Number(hovering) }),
    });
    return (
        <Box
            as={animated.div}
            {...bind()}
            bg="cornflowerblue"
            w="1200px"
            h="600px"
            position="relative"
            borderRadius="25px"
            boxShadow="0 10px 30px 10px rgba(0,0,0,0.2)"
            style={{
                boxShadow: active
                    .to([0, 1], [0, 0.2])
                    .to((shadow) => `0 10px 30px 10px rgba(0,0,0,${shadow})`),
                scale: active.to([0, 1], [1, 1.05]),
                x: x.to((x) => x / 50),
                y: y.to((y) => y / 50),
            }}
        >
            <Box
                as={animated.div}
                bg="#294C60"
                w="500px"
                h="500px"
                position="absolute"
                borderRadius="50%"
                boxShadow="0 10px 30px 10px rgba(0,0,0,0.2)"
                top="-30px"
                left="100px"
                style={{
                    scale: active.to([0, 1], [1, 1.2]),
                    x: x.to((x) => x / 20),
                    y: y.to((y) => y / 20),
                }}
            />
            <Box
                as={animated.div}
                bg="#FFBC42"
                w="400px"
                h="100px"
                position="absolute"
                borderRadius="25px"
                boxShadow="0 10px 30px 10px rgba(0,0,0,0.2)"
                top="125px"
                left="325px"
                style={{
                    rotate: active.to([0, 1], [320, 240]),
                    x: x.to((x) => x / 5),
                    y: y.to((y) => y / 5),
                }}
            />
            <Box
                as={animated.div}
                bg="#34F6F2"
                w="65%"
                h="50px"
                position="absolute"
                borderRadius="25px"
                boxShadow="0 10px 30px 10px rgba(0,0,0,0.2)"
                bottom="50px"
                left="200px"
                style={{
                    scaleX: active.to([0, 1], [1, 1.4]),
                    x: x.to((x) => x / 10),
                    y: y.to((y) => y / 20),
                }}
            />
            <Box
                as={animated.div}
                bg="#FFEFD3"
                w="150px"
                h="400px"
                position="absolute"
                borderRadius="25px"
                boxShadow="0 10px 30px 10px rgba(0,0,0,0.2)"
                bottom="-50px"
                right="30%"
                transformOrigin="bottom"
                style={{
                    scaleY: active.to([0, 1], [1, 1.5]),
                    x: x.to((x) => x / 15),
                    y: y.to((y) => y / 15),
                }}
            />
        </Box>
    );
}
