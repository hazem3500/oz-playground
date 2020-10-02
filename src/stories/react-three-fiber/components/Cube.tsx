import React from 'react';

export const Cube = React.forwardRef<
    React.ReactNode,
    {
        position?: [number, number, number];
        geometry?: [number, number, number];
        color?: string;
    }
>(
    (
        { position = [0, 0, 0], color = 'dodgerblue', geometry = [1, 1, 1] },
        ref
    ) => {
        return (
            <mesh ref={ref} position={position}>
                <boxBufferGeometry attach="geometry" args={geometry} />
                <meshPhysicalMaterial attach="material" color={color} />
            </mesh>
        );
    }
);
