import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Spots = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 0.8 }));


  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <>
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color='#FFF000'
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
    </>
  );
};

const SpotsCanvas = () => {
  return (
    <div className='w-full h-auto mt-[-50vh] absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [1, 0, 1] }} antialias={'true'}>
        <Suspense fallback={null}>
          <Spots />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SpotsCanvas;
