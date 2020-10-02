// inspired by: https://tympanus.net/codrops/2020/09/30/creating-mirrors-in-react-three-fiber-and-three-js/

import { Text } from '@react-three/drei';
import React from 'react';
import { Canvas } from 'react-three-fiber';

export function Mirrors() {
    return (
        <Canvas>
            <Text material-toneMapped={false}>Hello</Text>
        </Canvas>
    );
}
