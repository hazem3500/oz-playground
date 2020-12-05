import React from 'react';
import { Box } from '@chakra-ui/react';
import { animated, useSpring } from 'react-spring';

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 10,
    (x - window.innerWidth / 2) / 10,
    1.2,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function CardHover() {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        o: 0,
    }));
    return (
        <Box
            as={animated.div}
            borderRadius="25px"
            bg="cornflowerblue"
            height="200px"
            width="200px"
            onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xys: calc(x, y), o: 1 })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1], o: 0 })}
            style={{
                transform: props.xys.to(trans),
                boxShadow: props.o
                    .to([0, 1], [0, 0.2])
                    .to((o) => `0 25px 50px -12px rgba(0,0,0,${o})`),
            }}
        ></Box>
    );
}
