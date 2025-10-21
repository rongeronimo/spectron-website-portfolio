import React, { useRef, useEffect, useState } from "react";
import Scene from "./Scene";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { useToggleRoomStore } from "../stores/toggleRoomStore.js";

const Experience = () => {
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const [showDarkMode, setShowDarkMode] = useState(false);
  const [showGlowText, setShowGlowText] = useState(false);
  const { isDarkRoom, setIsTransitioning } = useToggleRoomStore();

  const cameraPositions = {
    dark: {
      position: new THREE.Vector3(31.1246, 26.695, 31.306),
    },
    light: {
      position: new THREE.Vector3(42.9, 36.4, 13.5),
    },
  };

  useEffect(() => {
    if (!cameraRef.current) return;

    setIsTransitioning(true);
    const targetPosition = isDarkRoom
      ? cameraPositions.dark.position
      : cameraPositions.light.position;

    const t1 = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    t1.to(cameraRef.current, {
      zoom: 100,
      onUpdate: () => {
        cameraRef.current.updateProjectionMatrix();
      },
    })
      .to(cameraRef.current.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
      })
      .to(cameraRef.current, {
        zoom: 110,
        onUpdate: () => {
          cameraRef.current.updateProjectionMatrix();
        },
      });
  }, [isDarkRoom]);

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

        // Then show "Find what glows." after a small delay
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
        style={{ opacity: 0, transition: "opacity 1s ease" }}
      >
        <OrthographicCamera
          ref={cameraRef}
          makeDefault
          position={[31.1246, 26.695, 31.306]}
          rotation={[-0.6811, 0.6517, 0.4569]}
          zoom={110}
        />
        <Scene camera={cameraRef} pointerRef={pointerRef} />
        {/* <OrbitControls /> */}
      </Canvas>

      {showDarkMode && <div className="overlay-text">Dark.</div>}
      {showGlowText && <div className="glow-text">Find what glows.</div>}
    </>
  );
};

export default Experience;
