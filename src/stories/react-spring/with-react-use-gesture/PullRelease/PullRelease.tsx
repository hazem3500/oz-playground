import React from 'react';
import { Box } from '@chakra-ui/react';
import { animated, to, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

export default function PullRelease() {
    const [props, set] = useSpring(() => ({
        x: 0,
        y: 0,
        scale: 1,
        active: 0,
    }));
    const { x, y, scale, active } = props;
    const bind = useDrag(({ movement: [mx, my], down, distance }) =>
        set({
            x: down ? mx : 0,
            y: down ? my : 0,
            scale: down ? distance : 1,
            active: Number(down),
        })
    );
    return (
        <Box
            as={animated.div}
            {...bind()}
            style={{
                x,
                y,
                scale: scale.to({ range: [0, 500], output: [1, 1.8] }),
                backgroundColor: active.to({
                    range: [0, 1],
                    output: ['cornflowerblue', 'red'],
                }),
            }}
            cursor="grab"
            height="100px"
            width="100px"
            borderRadius="50%"
        />
    );
}
