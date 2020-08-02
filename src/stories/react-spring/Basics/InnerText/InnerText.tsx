import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export default function InnerText() {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: 100 },
        loop: { reverse: true },
        config: config.slow,
    });
    return <animated.h1>{number.interpolate((n) => n.toFixed(2))}</animated.h1>;
}
