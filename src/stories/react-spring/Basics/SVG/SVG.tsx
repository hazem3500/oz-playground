import React from 'react';
import { animated, useSpring, config } from 'react-spring';

export default function SVG({ path }) {
    const { x } = useSpring({
        from: { x: 0 },
        to: { x: 300 },
        loop: { reverse: true },
        config: config.slow,
    });
    return (
        <animated.svg
            strokeDashoffset={x}
            strokeDasharray="300"
            stroke="black"
            strokeWidth="2"
            viewBox="0 0 46 46"
            width="80px"
            height="80px"
            fill="none"
        >
            <path d={path} />
        </animated.svg>
    );
}
