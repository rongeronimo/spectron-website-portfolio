import React, {useRef, useEffect} from "react";
import Scene from './Scene';
import { Canvas } from "@react-three/fiber";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Experience = () => {
    const cameraRef = useRef();

    const pointerRef = useRef({x:0, y: 0});

    useEffect(() => {
        const onpointerMove = (e) => {
            pointerRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointerRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        }

        window.addEventListener('pointermove', onpointerMove);

        return () => {
            window.removeEventListener('pointermove', onpointerMove);
        }
    });

    return (
        <> 
            <Canvas>
                <OrthographicCamera 
                    ref={cameraRef}
                    makeDefault 
                    position={[31.12460414658648, 26.69507956319511, 31.306227638881342]} 
                    rotation={[-0.6811139343276964, 0.6517841280318684, 0.45695116040411243]}
                    zoom={110} 
                />
                {/*<OrbitControls/>*/}
                <Scene camera={cameraRef} pointerRef={pointerRef}/>
            </Canvas>
        </>
    );
};

export default Experience;

