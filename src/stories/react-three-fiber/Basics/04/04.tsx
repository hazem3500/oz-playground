import { random } from 'lodash';
import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Controls } from '../../components/Controls';
import { Cube } from '../../components/Cube';

export function _04({ size = 6 }) {
    const [grid, setGrid] = useState(
        [...Array(size)].map((e) =>
            [...Array(size)].map((e) => Array(size).fill(null))
        )
    );
    const distance = 2;

    return (
        <Canvas camera={{ position: [0, 10, 30] }}>
            <ambientLight />
            <spotLight position={[-20, 20, 20]} intensity={0.5} />
            <Controls />
            {grid.map((row, i) =>
                row.map((column, j) =>
                    column.map((_, k) => (
                        <Cube
                            key={`${i} - ${j} - ${k}`}
                            position={[
                                j * distance - 5,
                                i * distance,
                                k * distance,
                            ]}
                        />
                    ))
                )
            )}
        </Canvas>
    );
}
