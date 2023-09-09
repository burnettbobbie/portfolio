import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { gsap } from 'gsap';

const SpinningModel = ({ initialPosition }) => {
  const gltf = useLoader(GLTFLoader, '/ball1.glb'); 
  const modelRef = useRef();

  useEffect(() => {
    gsap.set(modelRef.current.position, { ...initialPosition });

    const animationTimeline = gsap.timeline({ repeat: -1, yoyo: true });

    animationTimeline.to(modelRef.current.position, {
      duration: 2,
      x: '+=6',
      y: '+=-0.8',
      ease: 'power1.inOut',
    });
    animationTimeline.to(modelRef.current.position, {
      duration: 2,
      x: '-=6',
      y: '-=0.8',
      ease: 'power1.inOut',
    });
  }, [initialPosition]);

  return <primitive ref={modelRef} object={gltf.scene} scale={[1, 1, 1]} />;
};



const Bigball = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.06} />
      <SpinningModel initialPosition={{ x: 0, y: 0, z: 0 }} />
    </Canvas>
  );
};

export default Bigball;
