import { random } from 'lodash';
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls } from '../../components/Controls';
import { Cube } from '../../components/Cube';

export function _03({ size = 6 }) {
    const [grid, setGrid] = useState(
        [...Array(size)].map((e) => Array(size).fill(null))
    );
    const distance = 2;

    return (
        <Canvas camera={{ position: [0, 10, 18] }}>
            <ambientLight />
            <spotLight position={[-10, 10, 10]} intensity={0.5} />
            <Controls />
            {grid.map((row, i) =>
                row.map((_, j) => (
                    <Cube
                        key={`${i} - ${j}`}
                        position={[j * distance - 5, 0, i * distance]}
                        geometry={[1, random(1, 3), 1]}
                    />
                ))
            )}
        </Canvas>
    );
}
