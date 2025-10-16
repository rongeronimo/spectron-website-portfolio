import React, { useRef, useEffect, useState } from "react";
import Scene from "./Scene";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import LoadingPage from "../pages/LoadingPage/LoadingPage";

const Experience = () => {
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const [showDarkMode, setShowDarkMode] = useState(false);
  const [showGlowText, setShowGlowText] = useState(false);

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
    // Fade in the 3D scene
    gsap.to(".r3f-canvas", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    });

    // "Dark Mode." appears 2.3s after load complete
    setTimeout(() => {
      setShowDarkMode(true);

      // Remove "Dark Mode." after animation (4.5s)
      setTimeout(() => {
        setShowDarkMode(false);

        // Then show "Find what it glows." after a small delay
        setTimeout(() => {
          setShowGlowText(true);

          // Hide the second text after its own animation
          setTimeout(() => setShowGlowText(false), 4500);
        }, 400); // small buffer before next appears
      }, 4500);
    }, 2300);
  };

  return (
    <>
      <LoadingPage onComplete={handleLoadingComplete} />

      <Canvas
        className="r3f-canvas"
        style={{
          opacity: 0,
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
        <Scene pointerRef={pointerRef} />
      </Canvas>

      {showDarkMode && (
        <div className="overlay-text">Dark Mode.</div>
      )}

      {showGlowText && (
        <div className="glow-text">Find what glows.</div>
      )}
    </>
  );
};

export default Experience;
