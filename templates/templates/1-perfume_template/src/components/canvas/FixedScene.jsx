import React, { useRef, useEffect, useMemo, Suspense } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Canvas } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

/**
 * BottleMesh — GLB model loader with GSAP scroll animation.
 */
function BottleMesh({ modelPath }) {
    const groupRef = useRef(null)
    const { scene } = useGLTF(modelPath)
    const cloned = useMemo(() => scene.clone(true), [scene])

    useEffect(() => {
        if (!groupRef.current) return

        const waitForDom = setTimeout(() => {
            const el = document.getElementById('scroll-container')
            if (!el) return

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#scroll-container',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                })

                tl.to(groupRef.current.rotation, {
                    y: Math.PI * 2,
                    x: Math.PI / 6,
                    ease: 'none',
                })

                tl.to(groupRef.current.position, { y: 3, z: 2, ease: 'none' }, 0)
            })

            groupRef.current.__ctx = ctx
        }, 300)

        return () => {
            clearTimeout(waitForDom)
            if (groupRef.current?.__ctx) groupRef.current.__ctx.revert()
        }
    }, [])

    return (
        <group ref={groupRef}>
            {/* ← TWEAK scale here if bottle is too big/small on main page */}
            <primitive object={cloned} scale={1.5} position={[0, -1.5, 0]} />
        </group>
    )
}

/**
 * FallbackBox — Gold metallic bottle shape, always visible.
 * Also animated by GSAP ScrollTrigger.
 */
function FallbackBox() {
    const groupRef = useRef(null)

    useEffect(() => {
        if (!groupRef.current) return

        const waitForDom = setTimeout(() => {
            const el = document.getElementById('scroll-container')
            if (!el) return

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#scroll-container',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                })

                tl.to(groupRef.current.rotation, {
                    y: Math.PI * 2,
                    x: Math.PI / 6,
                    ease: 'none',
                })

                tl.to(groupRef.current.position, { y: 3, z: 2, ease: 'none' }, 0)
            })

            groupRef.current.__ctx = ctx
        }, 300)

        return () => {
            clearTimeout(waitForDom)
            if (groupRef.current?.__ctx) groupRef.current.__ctx.revert()
        }
    }, [])

    return (
        <group ref={groupRef}>
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 1.8, 32]} />
                <meshStandardMaterial color="#c9a84c" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.9, 0]}>
                <cylinderGeometry args={[0.15, 0.25, 0.6, 32]} />
                <meshStandardMaterial color="#c9a84c" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 1.4, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    )
}

/**
 * FixedScene — Fixed fullscreen R3F Canvas.
 * 
 * The ENTIRE Canvas + model is here (not split across files).
 * Fixed position, pointer-events none, z:0.
 * Uses Suspense with FallbackBox while GLB loads.
 */
export default function FixedScene({ modelPath }) {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            <Canvas
                camera={{ position: [0, 0.5, 8], fov: 40 }}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <directionalLight position={[-5, 5, -5]} intensity={0.3} />
                <pointLight position={[0, -2, 3]} intensity={0.4} color="#f5f0e8" />
                <Environment preset="studio" />

                {/* Suspense: show FallbackBox while GLB loads, then swap to model */}
                <Suspense fallback={<FallbackBox />}>
                    <BottleMesh modelPath={modelPath} />
                </Suspense>
            </Canvas>
        </div>
    )
}
