import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import starry_night_sky_hdri_background_photosphereScene from "../assets/3d/starry_night_sky_hdri_background_photosphere.glb";

export function Sky({ isRotating, ...props }) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(starry_night_sky_hdri_background_photosphereScene);

  useFrame((_, delta) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={177.063}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(starry_night_sky_hdri_background_photosphereScene);
