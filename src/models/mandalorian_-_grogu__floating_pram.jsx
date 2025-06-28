import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

// Import the model using a relative path
const groguPramScene = new URL('../assets/3d/mandalorian_-_grogu__floating_pram.glb', import.meta.url).href;

export function GroguPram({ isRotating, ...props }) {
  const pramRef = useRef();
  const { scene, animations } = useGLTF(groguPramScene);
  const { actions } = useAnimations(animations, pramRef);

  // Play animation when component mounts
  useEffect(() => {
    // Assuming the animation name from the model
    const animationName = Object.keys(actions)[0];
    if (actions[animationName]) {
      actions[animationName].play();
    }
  }, []);

  useFrame(({ clock }) => {
    if (!pramRef.current) return;

    // Floating motion using sine wave - adjusted to be lower
    pramRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.2 - 1;

    // Circular motion around the island
    const time = clock.elapsedTime * 0.2;
    const radius = 3; // Distance from the island
    pramRef.current.position.x = Math.cos(time) * radius;
    pramRef.current.position.z = Math.sin(time) * radius;

    // Make the pram face the direction it's moving
    pramRef.current.rotation.y = time - Math.PI / 2;
  });

  return (
    <primitive 
      ref={pramRef}
      object={scene}
      {...props}
      scale={[2, 2, 2]}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

useGLTF.preload(groguPramScene); 