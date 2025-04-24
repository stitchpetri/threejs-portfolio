import React from 'react'
import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <spotLight  position={[2, 5, 6]}
                intensity={15.5}
                angle={0.8}
                penumbra={0.5}
                castShadow={true}
                target-position={[2, 0, 6] }
            />
            {/* <primitive
                object={new THREE.RectAreaLight("#FFF", 15, 15, 20)}
                /> */}
                  <directionalLight position={[2,5,0]} intensity={5} castShadow={true} shadow-mapSize-width={4096} shadow-mapSize-height={4096} shadow-camera-near={1} shadow-camera-far={20} shadow-camera-left={-100} shadow-camera-right={100} shadow-camera-top={100} shadow-camera-bottom={-100} color={"#717ac7"} normalBias={0.1}/>

            <hemisphereLight />

        </>
    )
}
export default HeroLights
