import React, { Suspense, useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * PerfumeModel — Loads and renders a GLB perfume bottle model.
 *
 * CRITICAL: Each instance CLONES the scene so multiple bottles
 * can render simultaneously (needed for infinite scroll duplicates).
 *
 * TWEAKABLE PROPS:
 * ┌──────────────────┬───────┬──────────────────────────────────────────┐
 * │ Prop             │ Default│ Description                             │
 * ├──────────────────┼───────┼──────────────────────────────────────────┤
 * │ modelPath        │ —     │ GLB file path                           │
 * │ scale            │ 1     │ Scale multiplier                         │
 * │ position         │[0,0,0]│ Initial [x, y, z] position               │
 * │ rotation         │[0,0,0]│ Initial [x, y, z] rotation (radians)     │
 * │ autoRotate       │ true  │ Enable continuous Y rotation             │
 * │ autoRotateSpeed  │ 1.5   │ Rotation speed multiplier                │
 * │ floatAmplitude   │ 0.08  │ Float bob height in 3D units             │
 * │ floatSpeed       │ 1.5   │ Float animation speed                    │
 * └──────────────────┴───────┴──────────────────────────────────────────┘
 */
function PerfumeModelInner({
    modelPath,
    scale = 1,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    autoRotate = true,
    autoRotateSpeed = 1.5,
    floatAmplitude = 0.08,
    floatSpeed = 1.5,
}) {
    const { scene } = useGLTF(modelPath)
    const groupRef = useRef()

    // CRITICAL: Deep-clone the scene so each instance has its own copy.
    // Without this, Two <primitive> using the same scene will fight over it
    // because a Three.js Object3D can only belong to ONE parent at a time.
    const clonedScene = useMemo(() => {
        const clone = scene.clone(true)
        // Also clone materials so instances don't share material state
        clone.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material = child.material.clone()
            }
        })
        return clone
    }, [scene])

    useFrame((state) => {
        if (!groupRef.current) return
        const t = state.clock.elapsedTime

        // Gentle floating bob
        groupRef.current.position.y = position[1] + Math.sin(t * floatSpeed) * floatAmplitude

        // Auto-rotation on Y axis
        if (autoRotate) {
            groupRef.current.rotation.y = rotation[1] + t * 0.3 * (autoRotateSpeed / 1.5)
        }

        // Keep X and Z rotation static at initial value
        groupRef.current.rotation.x = rotation[0]
        groupRef.current.rotation.z = rotation[2]
    })

    return (
        <group ref={groupRef} position={position} scale={scale}>
            <primitive object={clonedScene} />
        </group>
    )
}

/**
 * Fallback — spinning wireframe shown while GLB loads.
 */
function ModelFallback() {
    const meshRef = useRef()
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
        }
    })
    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial color="#c9a84c" wireframe transparent opacity={0.4} />
        </mesh>
    )
}

/**
 * PerfumeModel — Wrapped with Suspense for loading states.
 */
export default function PerfumeModel(props) {
    return (
        <Suspense fallback={<ModelFallback />}>
            <PerfumeModelInner {...props} />
        </Suspense>
    )
}
