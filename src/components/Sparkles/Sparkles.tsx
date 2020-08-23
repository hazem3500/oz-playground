import React, { useState } from 'react';
import { random, range } from 'lodash';
import { Box } from '@chakra-ui/core';
import { animated, config, useSpring } from 'react-spring';
import useRandomInterval from '../../hooks/useRandomInterval';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

const generateSparkle = (color = DEFAULT_COLOR) => ({
    id: String(random(10000, 100000)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
        top: `${random(0, 100)}%`,
        left: `${random(0, 100)}%`,
        zIndex: 2,
        position: 'absolute',
    },
});

function SparkleWrapper({ children, style }) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const props = useSpring({
        from: {
            o: 0,
            rotate: 0,
        },
        o: 1,
        rotate: prefersReducedMotion ? 0 : 180,
        config: config.slow,
    });
    return (
        <animated.div
            style={{
                ...props,
                scale:
                    !prefersReducedMotion && props.o.to([0, 0.5, 1], [0, 1, 0]),
                position: 'absolute',
                pointerEvents: 'none',
                zIndex: 2,
                ...style,
            }}
        >
            {children}
        </animated.div>
    );
}

function SparkleInstance({ size, color }) {
    return (
        <svg width={size} height={size} fill="none" viewBox="0 0 160 160">
            <path
                fill={color}
                d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
            ></path>
        </svg>
    );
}

export default function Sparkles({
    children,
    SparkleComponent = SparkleInstance,
}) {
    const [sparkles, setSparkles] = useState(() =>
        range(4).map((_) => generateSparkle())
    );
    const prefersReducedMotion = usePrefersReducedMotion();
    useRandomInterval(
        () => {
            const now = Date.now();
            const sparkle = generateSparkle();

            const nextSparkles = sparkles.filter(
                (sparkle) => now - sparkle.createdAt < 1000
            );

            nextSparkles.push(sparkle);
            setSparkles(nextSparkles);
        },
        prefersReducedMotion ? null : 50,
        prefersReducedMotion ? null : 500
    );
    return (
        <Box position="relative" display="inline-block">
            {sparkles.map((sparkle) => (
                <SparkleWrapper key={sparkle.id} style={sparkle.style}>
                    <SparkleComponent
                        color={sparkle.color}
                        size={sparkle.size}
                    />
                </SparkleWrapper>
            ))}
            <Box position="relative" zIndex="1">
                {children}
            </Box>
        </Box>
    );
}
