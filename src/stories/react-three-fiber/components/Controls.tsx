import React from 'react';
import { useRef } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = () => {
    const controlsRef = useRef();
    const { camera, gl } = useThree();

    useFrame(() => {
        controlsRef.current.update();
    });

    return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};
