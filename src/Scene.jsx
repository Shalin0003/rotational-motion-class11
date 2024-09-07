import React, { useRef } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';


const Scene = () => {
    let tex = useTexture("./img.png");
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    });
    
  return (
    <group rotation={[0, 1.9, 0.5]}>
    <mesh ref={cyl} rotation={[0, 1, 0.3]}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial map={tex} transparent side = {THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;