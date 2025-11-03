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
  const [showLightMode, setShowLightMode] = useState(false);
  const [showGlowText, setShowGlowText] = useState(false);
  const [showGlowText2, setShowGlowText2] = useState(false);
  const [transitionText, setTransitionText] = useState("");
  const { isDarkRoom, setIsTransitioning } = useToggleRoomStore();

  const cameraPositions = {
      dark: { position: new THREE.Vector3(31.1246, 26.695, 31.306) },
      light: { position: new THREE.Vector3(42.9, 36.4, 13.5) },
  };

  const switchTextDelay = 1500; // delay before showing overlay text after transition

  useEffect(() => {
    if (!cameraRef.current) return;

    setIsTransitioning(true);

    const targetPosition = isDarkRoom
      ? cameraPositions.dark.position
      : cameraPositions.light.position;

    const overlay = document.querySelector(".transition-overlay");
    if (overlay) overlay.style.backgroundColor = isDarkRoom ? "black" : "white";

    setTransitionText(isDarkRoom ? "Lead with calm." : "Grow brighter.");

    // Fade-in overlay + transition text
    gsap.to(".transition-overlay", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.fromTo(
          ".transition-text",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 1, ease: "power2.inOut" }
        );

        gsap.to(".transition-text", {
          opacity: 0,
          delay: 3,
          duration: 0.8,
          ease: "power2.inOut",
        });

        const t1 = gsap.timeline({
          delay: 0.5,
          onComplete: () => {
            setIsTransitioning(false);

            // fade overlay back out after transition
            gsap.to(".transition-overlay", {
              opacity: 0,
              delay: 1.5,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                // delay before showing overlay text
                setTimeout(() => {
                  if (isDarkRoom) {
                    // Entering Dark room
                    setShowDarkMode(true);
                    requestAnimationFrame(() => {
                      gsap.fromTo(
                        ".overlay-text",
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 1.2,
                          ease: "power2.inOut",
                          onComplete: () => {
                            gsap.to(".overlay-text", {
                              opacity: 0,
                              delay: 2.5,
                              duration: 1.5,
                              ease: "power2.inOut",
                              onComplete: () => {
                                setShowDarkMode(false);

                                // show "Find what glows." after "Dark." fades out
                                setTimeout(() => {
                                  setShowGlowText(true);
                                  requestAnimationFrame(() => {
                                    const tl = gsap.timeline({
                                      onComplete: () => setShowGlowText(false),
                                    });

                                    tl.fromTo(
                                      ".glow-text",
                                      { opacity: 0 },
                                      {
                                        opacity: 1,
                                        duration: 1.2,
                                        ease: "power2.inOut",
                                      }
                                    );

                                    tl.to(".glow-text", {
                                      opacity: 0,
                                      delay: 3,
                                      duration: 1.5,
                                      ease: "power2.inOut",
                                    });
                                  });
                                }, 400);
                              },
                            });
                          },
                        }
                      );
                    });
                  } else {
                    // Entering Light room
                    setShowLightMode(true);
                    requestAnimationFrame(() => {
                      gsap.fromTo(
                        ".overlay-text2",
                        { opacity: 0 },
                        {
                          opacity: 1,
                          duration: 1.2,
                          ease: "power2.inOut",
                          onComplete: () => {
                            gsap.to(".overlay-text2", {
                              opacity: 0,
                              delay: 2.5,
                              duration: 1.5,
                              ease: "power2.inOut",
                              onComplete: () => {
                                setShowLightMode(false);

                                // show "Reflect with intent." after "Light." fades out
                                setTimeout(() => {
                                  setShowGlowText2(true);
                                  requestAnimationFrame(() => {
                                    const tl = gsap.timeline({
                                      onComplete: () => setShowGlowText2(false),
                                    });

                                    tl.fromTo(
                                      ".glow-text2",
                                      { opacity: 0 },
                                      {
                                        opacity: 1,
                                        duration: 1.2,
                                        ease: "power2.inOut",
                                      }
                                    );

                                    tl.to(".glow-text2", {
                                      opacity: 0,
                                      delay: 3,
                                      duration: 1.5,
                                      ease: "power2.inOut",
                                    });
                                  });
                                }, 400);
                              },
                            });
                          },
                        }
                      );
                    });
                  }
                }, switchTextDelay);
              },
            });
          },
        });

        // camera move animation
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

  // Pointer tracking
  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  // Loading complete animation sequence
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

      <div className="transition-overlay">
        <div
          className="transition-text"
          style={{ color: isDarkRoom ? "white" : "black" }}
        >
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
      {showLightMode && <div className="overlay-text2">Light.</div>}
      {showGlowText && <div className="glow-text">Find what glows.</div>}
      {showGlowText2 && <div className="glow-text2">Reflect with intent.</div>}
    </>
  );
};

export default Experience;
