import React, { useRef, useEffect, useState } from "react";
import Scene from './Scene';
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import LoadingPage from "../pages/LoadingPage/LoadingPage";

const Experience = () => {
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const [showWelcomeText, setShowWelcomeText] = useState(false);

  // Pointer tracking
  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  const handleLoadingComplete = () => {
    // fade in scene first
    gsap.to(".r3f-canvas", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    });

    // show text a bit later (after 1 s)
    setTimeout(() => setShowWelcomeText(true), 2000);
  };

  return (
    <>
      <LoadingPage onComplete={handleLoadingComplete} />

      <Canvas
        className="r3f-canvas"
        style={{
          opacity: 0, // start invisible until overlay done
          transition: "opacity 1s ease",
        }}
      >
        <OrthographicCamera
          ref={cameraRef}
          makeDefault
          position={[31.1246, 26.695, 31.306]}
          rotation={[-0.6811, 0.6517, 0.4569]}
          zoom={110}
        />
        {/* ✅ Scene itself has its own Suspense */}
        <Scene pointerRef={pointerRef} />
      </Canvas>

      {showWelcomeText && (
        <div className="darkmode-text">Dark Mode.</div>
      )}
    </>
  );
};

export default Experience;
