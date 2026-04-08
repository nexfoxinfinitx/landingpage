import React, { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGLTF, useAnimations } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollBottleModel — Loads GLB and animates with GSAP ScrollTrigger.
 */
function ScrollBottleModel({ modelPath }) {
    const groupRef = useRef(null)
    const { scene } = useGLTF(modelPath)

    // Clone scene so it can be reused across components
    const clonedScene = useMemo(() => scene.clone(true), [scene])

    // GSAP scroll-driven animation
    useEffect(() => {
        if (!groupRef.current) return

        // Wait for DOM to have #scroll-container
        const timer = setTimeout(() => {
            const container = document.getElementById('scroll-container')
            if (!container) {
                console.warn('ScrollBottle: #scroll-container not found in DOM')
                return
            }

            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '#scroll-container',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 1,
                    },
                })

                // Rotate the bottle (full spin Y, slight tilt X)
                tl.to(groupRef.current.rotation, {
                    y: Math.PI * 2,
                    x: Math.PI / 6,
                    ease: 'none',
                })

                // Float upward as scroll progresses
                tl.to(
                    groupRef.current.position,
                    {
                        x: 0,
                        y: 2,
                        z: 1.5,
                        ease: 'none',
                    },
                    0
                )
            })

            // Store cleanup
            groupRef.current._gsapCtx = ctx
        }, 200)

        return () => {
            clearTimeout(timer)
            if (groupRef.current?._gsapCtx) {
                groupRef.current._gsapCtx.revert()
            }
        }
    }, [])

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <primitive object={clonedScene} scale={1.5} position={[0, -1.5, 0]} />
        </group>
    )
}

/**
 * FallbackBottle — Gold bottle shape shown when GLB fails to load.
 */
function FallbackBottle() {
    const groupRef = useRef(null)

    useEffect(() => {
        if (!groupRef.current) return

        const timer = setTimeout(() => {
            const container = document.getElementById('scroll-container')
            if (!container) return

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

                tl.to(
                    groupRef.current.position,
                    { x: 0, y: 2, z: 1.5, ease: 'none' },
                    0
                )
            })

            groupRef.current._gsapCtx = ctx
        }, 200)

        return () => {
            clearTimeout(timer)
            if (groupRef.current?._gsapCtx) {
                groupRef.current._gsapCtx.revert()
            }
        }
    }, [])

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Bottle body */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 1.8, 32]} />
                <meshStandardMaterial color="#c9a84c" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Bottle neck */}
            <mesh position={[0, 0.9, 0]}>
                <cylinderGeometry args={[0.15, 0.25, 0.6, 32]} />
                <meshStandardMaterial color="#c9a84c" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Cap */}
            <mesh position={[0, 1.4, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    )
}

/**
 * ScrollBottle — Wrapper that tries GLB model, falls back to gold shape.
 */
export default function ScrollBottle({ modelPath }) {
    return (
        <ErrorBoundary fallback={<FallbackBottle />}>
            <ScrollBottleModel modelPath={modelPath} />
        </ErrorBoundary>
    )
}

/**
 * Simple error boundary for catching useGLTF failures.
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error) {
        console.warn('3D model failed to load, using fallback:', error.message)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}
