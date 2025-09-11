import React, { Suspense, useRef } from "react";
import * as THREE from 'three';
import DarkHomeOffice from './models/Homeofficev5';
import DarkTargets from './models/Darktargets';
import { useFrame } from "@react-three/fiber";
import Gridplanes from "./components/Gridplanes";

const Scene = ({pointerRef}) => {

    const groupRef = useRef();
    const groupRotationRef = useRef(0);

    useFrame(() => {
        if(!groupRef.current) return;
        //console.log(camera.current.position);
        //console.log(camera.current.rotation);

        const targetRotation = pointerRef.current.x  * Math.PI * 0.04;

        groupRotationRef.current = THREE.MathUtils.lerp(
            groupRotationRef.current,
            targetRotation,
            0.1
        )

        groupRef.current.rotation.y = groupRotationRef.current;
    });

    return (
        <>
            <Suspense>
                <ambientLight intensity={6} />
                <group ref={groupRef}>
                <DarkHomeOffice/>
                <DarkTargets/>
                <Gridplanes 
                    rows={10} 
                    columns={10} 
                    planeWidth={3} 
                    planeDepth={3} 
                    spacing={0}
                />
                </group>
            </Suspense>
        </>
    );
};

export default Scene;
