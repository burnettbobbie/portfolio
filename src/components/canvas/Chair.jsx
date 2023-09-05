import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Chair = ({ isMobile }) => {
  const chair = useGLTF("./chair/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-3, 2, 3]}
        angle={3.5}
        penumbra={3}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={chair.scene}
        scale={isMobile ? 0.2 : 1.8}
        position={isMobile ? [0, 0, 0] : [1, -3.5, -4]}
        rotation={[0.2, -6, -0.2]}
      />
    </mesh>
  );
};

const ChairCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? <></> : <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 7]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={3}
            minPolarAngle={Math.PI/4 }
          />
          <Chair isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>}
    </>
  );
};

export default ChairCanvas;
