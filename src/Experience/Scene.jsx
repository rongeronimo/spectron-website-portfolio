import React, { Suspense, useRef, useState, useEffect} from "react";
import * as THREE from "three";
import Dark1stOffice from "./models/Dark1stoffice";
import Dark2ndOffice from "./models/Dark2ndoffice";
import Dark3rdOffice from "./models/Dark3rdoffice";
import Dark4thOffice from "./models/Dark4thoffice";
import Light1stHomeOffice from "./models/Light1stoffice";
import Light2ndHomeOffice from "./models/Light2ndoffice";
import Light3rdHomeOffice from "./models/Light3rdoffice";
import Light4thHomeOffice from "./models/Light4thoffice";
import Light5thHomeOffice from "./models/Light5thoffice";
import Light6thHomeOffice from "./models/Light6thoffice";
import DarkTargets from "./models/Darktargets";
import Gridplanes from "./components/GridPlanes";
import { useFrame } from "@react-three/fiber";
import  { useToggleRoomStore }  from "../stores/toggleRoomStore.js";
import gsap from "gsap";

const Scene = ({ pointerRef }) => {
  const darkgroupRef = useRef();
  const lightgroupRef = useRef();
  const gridPlanesRef = useRef();
  const darkRoomGroupPosition = new THREE.Vector3(0, 0, 0);
  const lightRoomGroupPosition = new THREE.Vector3(1.24, 0, -32.431);

  const groupRotationRef = useRef(0);
  const { isDarkRoom, isTransitioning } = useToggleRoomStore();
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => { 
    if(!gridPlanesRef.current) return;

    const targetPosition = isDarkRoom 
    ? darkRoomGroupPosition 
    : lightRoomGroupPosition;

    gsap.to(gridPlanesRef.current.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      delay: 1,
    });

  }, [isDarkRoom]);

    

  // Smooth pointer rotation animation
  useFrame(() => {
    if (!darkgroupRef.current || !lightgroupRef.current || !gridPlanesRef.current) return;

    // console.log(cameraRef.current.position);
    // console.log(cameraRef.current.rotation);

    const targetRotation = pointerRef.current.x * Math.PI * 0.02;
    
    groupRotationRef.current = THREE.MathUtils.lerp(
      groupRotationRef.current,
      targetRotation,
      0.1
    );

    darkgroupRef.current.rotation.y = groupRotationRef.current;
    lightgroupRef.current.rotation.y = groupRotationRef.current;
    gridPlanesRef.current.rotation.y = groupRotationRef.current;

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
      <group ref={darkgroupRef}>
        <Dark1stOffice />
        <Dark2ndOffice />
        <Dark3rdOffice />
        <Dark4thOffice />
        <DarkTargets />
      </group>

      <group ref={lightgroupRef} position={lightRoomGroupPosition}>
        <Light1stHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
        <Light2ndHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
        <Light3rdHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
        <Light4thHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
        <Light5thHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
        <Light6thHomeOffice position={[-lightRoomGroupPosition.x, -lightRoomGroupPosition.y, -lightRoomGroupPosition.z]} />
      </group>

      <Gridplanes
        ref = {gridPlanesRef}
        rows={8}
        columns={8}
        planeWidth={3}
        planeDepth={3}
        spacing={0}
      />
    </Suspense>
  );
};

export default Scene;
