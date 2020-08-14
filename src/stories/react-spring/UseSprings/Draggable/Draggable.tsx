import { Box, Heading, Stack } from '@chakra-ui/core';
import React, { useRef } from 'react';
import { animated, useSprings } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import arrayMove from 'array-move';

export default function Draggable({ items }) {
    const order = useRef(items.map((_, i) => i));
    const [springs, set] = useSprings(items.length, (index) => ({
        scale: 1,
        o: 0,
        y: order.current[index] * 100,
    }));
    const bind = useDrag(
        ({ down, args: [activeElementIndex], movement: [, y] }) => {
            const currIndex = order.current.indexOf(activeElementIndex);
            const currRow = Math.max(
                0,
                Math.min(
                    Math.round((currIndex * 100 + y) / 100),
                    items.length - 1
                )
            );
            const newOrder = arrayMove(order.current, currIndex, currRow);
            set((index) => {
                const isActive = down && index === activeElementIndex;
                return {
                    scale: isActive ? 1.1 : 1,
                    o: isActive ? 1 : 0,
                    zIndex: isActive ? 1 : 0,
                    y: isActive
                        ? currIndex * 100 + y
                        : newOrder.indexOf(index) * 100,
                    immediate: isActive
                        ? (key) => ['zIndex', 'y'].includes(key)
                        : false,
                };
            });
            if (!down) order.current = newOrder;
        }
    );
    return (
        <Box width="200px" height={items.length * 100}>
            {springs.map((props, i) => (
                <Box
                    key={i}
                    as={animated.div}
                    bg="cornflowerblue"
                    minWidth="200px"
                    rounded={5}
                    p={5}
                    userSelect="none"
                    position="absolute"
                    style={{
                        ...props,
                        boxShadow: props.o
                            .to([0, 1], [0, 0.2])
                            .to(
                                (shadow) =>
                                    `0 0 30px 10px rgba(0,0,0, ${shadow})`
                            ),
                    }}
                    {...bind(i)}
                >
                    <Heading
                        fontFamily="sans-serif"
                        size="md"
                        color="white"
                        textAlign="center"
                    >
                        {items[i]}
                    </Heading>
                </Box>
            ))}
        </Box>
    );
}
