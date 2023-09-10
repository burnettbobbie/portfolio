import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(300), { radius: 0.8 }));


  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 25;
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

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto mt-[-50vh] absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [1, 0, 1] }} antialias pixelRatio={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
