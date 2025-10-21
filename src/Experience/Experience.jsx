import React, { useRef, useEffect, useState } from "react";
import Scene from "./Scene";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import gsap from "gsap";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { useToggleRoomStore } from "../stores/toggleRoomStore.js";

const Experience = () => {
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const [showDarkMode, setShowDarkMode] = useState(false);
  const [showGlowText, setShowGlowText] = useState(false);
  const [transitionText, setTransitionText] = useState("");
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

    // ✅ Conditional overlay color + text
    const overlay = document.querySelector(".transition-overlay");
    if (overlay) {
      overlay.style.backgroundColor = isDarkRoom ? "black" : "white";
    }
    setTransitionText(isDarkRoom ? "Lead with calm." : "Grow brighter.");

    // Fade in overlay
    gsap.to(".transition-overlay", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        // ⏱️ Delay text fade-in by 1s
        gsap.fromTo(
          ".transition-text",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 1, ease: "power2.inOut" }
        );

        // Text stays for 2s, then fades out
        gsap.to(".transition-text", {
          opacity: 0,
          delay: 3,
          duration: 0.8,
          ease: "power2.inOut",
        });

        // Move camera while overlay is up
        const t1 = gsap.timeline({
          delay: 0.5,
          onComplete: () => {
            setIsTransitioning(false);

            // 🕒 Overlay fades out immediately after text finishes
            gsap.to(".transition-overlay", {
              opacity: 0,
              delay: 1.5, // reduced to remove dead air
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });

        t1.to(cameraRef.current, {
          duration: 0.8,
          ease: "power2.inOut",
          onUpdate: () => cameraRef.current.updateProjectionMatrix(),
        })
          .to(cameraRef.current.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1.5,
            ease: "power2.inOut",
          })
          .to(cameraRef.current, {
            duration: 0.8,
            ease: "power2.inOut",
            onUpdate: () => cameraRef.current.updateProjectionMatrix(),
          });
      },
    });
  }, [isDarkRoom]);

  // 🖱️ Pointer tracking
  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  // Loading + intro text sequence
  const handleLoadingComplete = () => {
    gsap.to(".r3f-canvas", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    });

    setTimeout(() => {
      setShowDarkMode(true);
      setTimeout(() => {
        setShowDarkMode(false);
        setTimeout(() => {
          setShowGlowText(true);
          setTimeout(() => setShowGlowText(false), 4500);
        }, 400);
      }, 4500);
    }, 2300);
  };

  return (
    <>
      <LoadingPage onComplete={handleLoadingComplete} />

      {/* Fade overlay */}
      <div className="transition-overlay">
        {/* Overlay text (appears after delay) */}
        <div className="transition-text" style={{ color: isDarkRoom ? "white" : "black" }}>
          {transitionText}
        </div>
      </div>

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
      </Canvas>

      {showDarkMode && <div className="overlay-text">Dark.</div>}
      {showGlowText && <div className="glow-text">Find what glows.</div>}
    </>
  );
};

export default Experience;
