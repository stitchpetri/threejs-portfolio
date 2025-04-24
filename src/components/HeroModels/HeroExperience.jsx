import React from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Scene} from "./DeskScene.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from './Particles.jsx';
import { Wolf } from "./WolfSitting.jsx";
import { Island } from './WolfIslandScene.jsx';
import * as THREE from 'three';

const HeroExperience = () => {
    const isTablet = useMediaQuery({query: "(max-width: 1024px)"});
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});

    return (
        <Canvas camera={{position: [0, -20, 0], fov:45 }} onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.75;
          }} >

           

            <OrbitControls
                enablePan={true}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI/5}
                maxPolarAngle={Math.PI/2}
                />

            <HeroLights/>
            <group
        
                scale={isMobile ? 0.7 : 1}
                position={[2,0,-1]}
            >
                

                {/* <Scene /> */}
                <Island/>
                <Wolf />
                

            </group>

            <Particles count={100}/>

        </Canvas>
    )
}
export default HeroExperience
