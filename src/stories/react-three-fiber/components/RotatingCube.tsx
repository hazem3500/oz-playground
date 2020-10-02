import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Cube } from './Cube';

export const RotatingCube = () => {
    const cubeRef = useRef();
    useFrame(() => {
        cubeRef.current.rotation.y += 0.01;
    });
    return <Cube ref={cubeRef} />;
};
