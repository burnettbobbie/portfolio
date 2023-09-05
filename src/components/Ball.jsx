import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from '@react-three/fiber';

const SpinningModel = () => {
  const gltf = useLoader(GLTFLoader, '/ball1.glb'); // Make sure the path is correct
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Rotate the model on the Y-axis and X-axis
      modelRef.current.rotation.y += 0.02;
      modelRef.current.rotation.x += 0.05;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={[2.3, 1.9, 1.9]} />;
};

const ModelViewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.01} />
      <pointLight position={[15, 10, 10]} castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.02} />
      <SpinningModel />
    </Canvas>
  );
};

export default ModelViewer;
