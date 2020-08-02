import React, { useState } from 'react';
import { Box } from '@chakra-ui/core';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function DragBox({
    background = 'cornflowerblue',
    activeBackground = 'red',
}) {
    const [props, set] = useSpring(() => ({
        x: 0,
        y: 0,
        active: 0,
    }));
    const { x, y, active } = props;
    const bind = useDrag(({ offset: [ox, oy], down, event }) => {
        event.preventDefault();
        set({ x: ox, y: oy, active: Number(down) });
    });
    return (
        <Box
            as={animated.div}
            {...bind()}
            style={{
                x,
                y,
                background: active.to({
                    range: [0, 1],
                    output: [background, activeBackground],
                }),
                scale: active.to({
                    range: [0, 1],
                    output: [1, 1.2],
                }),
                boxShadow: active
                    .to({
                        range: [0, 1],
                        output: [0.1, 0.2],
                    })
                    .to((shadow) => `0px 10px 80px 15px rgb(0,0,0,${shadow})`),
            }}
            cursor="grab"
            height="200px"
            width="200px"
            borderRadius="25px"
        />
    );
}
