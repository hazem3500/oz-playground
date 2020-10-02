import React from 'react';
import { Canvas } from 'react-three-fiber';
import { RotatingCube } from '../../components/RotatingCube';

export function _01() {
    return (
        <Canvas camera={{ position: [0, 3, 3] }}>
            <ambientLight />
            <directionalLight position={[-2, 2, 2]} intensity={0.5} />
            <RotatingCube />
        </Canvas>
    );
}
