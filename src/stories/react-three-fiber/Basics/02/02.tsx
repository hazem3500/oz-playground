import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls } from '../../components/Controls';
import { Cube } from '../../components/Cube';

export function _02() {
    return (
        <Canvas camera={{ position: [0, 3, 3] }}>
            <ambientLight />
            <Controls />
            <directionalLight position={[-2, 2, 2]} intensity={0.5} />
            <Cube />
        </Canvas>
    );
}
