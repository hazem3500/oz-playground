import React from 'react';
import { useSpring, animated, to, config } from 'react-spring';

export default function KeyFrames() {
    const { o } = useSpring({
        from: {
            o: 0,
        },
        to: {
            o: 1,
        },
        loop: { reverse: true },
        config: {
            tension: 200,
            friction: 100,
        },
    });
    return (
        <div>
            <animated.div
                style={{
                    height: '100px',
                    width: '100px',
                    borderRadius: o.interpolate([0, 1], ['50%', '5%']),
                    background: o.interpolate([0, 1], ['blue', 'red']),
                    transformOrigin: 'top center',
                    transform: to(
                        [
                            o.interpolate(
                                [0, 0.25, 0.5, 0.75, 1],
                                [0, 200, 200, 400, 400]
                            ),
                            o.interpolate(
                                [0, 0.25, 0.5, 0.75, 1],
                                [0, 0, 100, 100, 200]
                            ),
                            o.interpolate([0, 1], [1, 2]),
                        ],
                        (x, y, scale) =>
                            `translate3d(${x}px, ${y}px, 0px) scale(${scale})`
                    ),
                }}
            />
        </div>
    );
}
