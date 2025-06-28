import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import ufoScene from "../assets/3d/ufo.glb";

export function UFO() {
  const ufoRef = useRef();
  const { nodes, materials, animations } = useGLTF(ufoScene);
  const { actions } = useAnimations(animations, ufoRef);

  // Play animation when component mounts
  useEffect(() => {
    // Assuming the animation name from the UFO model
    // You'll need to check the actual animation name in your model
    const animationName = Object.keys(actions)[0];
    if (actions[animationName]) {
      actions[animationName].play();
    }
  }, []);

  useFrame(({ clock, camera }) => {
    // Floating motion using sine wave
    ufoRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Direction change logic
    if (ufoRef.current.position.x > camera.position.x + 10) {
      ufoRef.current.rotation.y = Math.PI;
    } else if (ufoRef.current.position.x < camera.position.x - 10) {
      ufoRef.current.rotation.y = 0;
    }

    // Movement logic
    if (ufoRef.current.rotation.y === 0) {
      ufoRef.current.position.x += 0.01;
      ufoRef.current.position.z -= 0.01;
    } else {
      ufoRef.current.position.x -= 0.01;
      ufoRef.current.position.z += 0.01;
    }
  });

  return (
    <group ref={ufoRef} position={[-5, 2, 1]} scale={1.21}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_6">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.LightMEtal}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.DarkMetal}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Light}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.White}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Glass}
                    skeleton={nodes.Object_11.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(ufoScene);