import React, { Suspense, useRef, useState,} from "react";
import * as THREE from "three";
import DarkHomeOffice from "./models/Darkhomeoffice";
import DarkTargets from "./models/Darktargets";
import Gridplanes from "./components/GridPlanes";
import { useFrame } from "@react-three/fiber";

const Scene = ({ pointerRef }) => {
  const groupRef = useRef();
  const groupRotationRef = useRef(0);
  const [sceneReady, setSceneReady] = useState(false);

  // Smooth pointer rotation animation
  useFrame(() => {
    if (!groupRef.current) return;

    const targetRotation = pointerRef.current.x * Math.PI * 0.04;
    groupRotationRef.current = THREE.MathUtils.lerp(
      groupRotationRef.current,
      targetRotation,
      0.1
    );

    groupRef.current.rotation.y = groupRotationRef.current;

    // Trigger scene-ready only once, after first frame
    if (!sceneReady) {
      setSceneReady(true);
      setTimeout(() => {
        window.dispatchEvent(new Event("scene-ready"));
      }, 500); // slight delay for smoother fade-in
    }
  });

  return (
    <Suspense fallback={null}>
      <group ref={groupRef}>
        <DarkHomeOffice />
        <DarkTargets />
        <Gridplanes
          rows={10}
          columns={10}
          planeWidth={3}
          planeDepth={3}
          spacing={0}
        />
      </group>
    </Suspense>
  );
};

export default Scene;
