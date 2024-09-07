import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import * as THREE from "three";
import { OrbitControls, useTexture } from '@react-three/drei';
import { CircleGeometry, CylinderGeometry } from 'three';
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {
  return (
    <Canvas camera={{fov: 35}}>
      <OrbitControls/>
      <ambientLight/>
      <Scene/>
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={0.1}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  )
}

export default App