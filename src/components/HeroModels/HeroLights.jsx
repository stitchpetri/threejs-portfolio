import React from 'react'
import * as THREE from "three";

const HeroLights = () => {
    return (
        <>
            <spotLight position={[2,5,6]} intensity={100} />
            <primitive
                object={new THREE.RectAreaLight("#A259FF", 15, 15, 20)}
                />
        </>
    )
}
export default HeroLights
