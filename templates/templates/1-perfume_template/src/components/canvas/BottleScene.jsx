import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import PerfumeModel from './PerfumeModel'

/**
 * BottleScene — Complete R3F Canvas with lighting, controls, and model.
 *
 * Drop-in component: pass a model path + config, get a rendered 3D bottle.
 *
 * TWEAKABLE PROPS:
 * ┌──────────────────┬───────┬──────────────────────────────────────────┐
 * │ Prop             │ Default│ Description                             │
 * ├──────────────────┼───────┼──────────────────────────────────────────┤
 * │ modelPath        │ —     │ Path to the GLB model file              │
 * │ scale            │ 2     │ Model scale multiplier                   │
 * │ position         │[0,0,0]│ 3D position [x, y, z]                   │
 * │ rotation         │[0,0,0]│ Initial rotation [x, y, z] in radians   │
 * │ interactive      │ true  │ Enable orbit controls (drag to rotate)   │
 * │ autoRotate       │ true  │ Auto-spin the model                      │
 * │ autoRotateSpeed  │ 1.5   │ Auto-rotation speed                      │
 * │ floatAmplitude   │ 0.08  │ Float bob height (3D units)              │
 * │ floatSpeed       │ 1.5   │ Float animation speed                    │
 * │ cameraDistance   │ 8     │ How far camera is from model             │
 * │ cameraFov        │ 40    │ Camera field of view (degrees)           │
 * └──────────────────┴───────┴──────────────────────────────────────────┘
 */
export default function BottleScene({
    modelPath,
    scale = 2,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    interactive = true,
    autoRotate = true,
    autoRotateSpeed = 1.5,
    floatAmplitude = 0.08,
    floatSpeed = 1.5,
    className = '',
    style = {},
    cameraDistance = 8,
    cameraFov = 40,
}) {
    return (
        <div className={className} style={{ width: '100%', height: '100%', ...style }}>
            <Canvas
                camera={{
                    position: [0, 0.5, cameraDistance],
                    fov: cameraFov,
                    near: 0.1,
                    far: 100,
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[1024, 1024]}
                />
                <directionalLight position={[-3, 3, -3]} intensity={0.3} />
                <pointLight position={[0, -2, 3]} intensity={0.4} color="#f5f0e8" />

                {/* Environment for reflections */}
                <Environment preset="studio" />

                {/* Perfume Bottle */}
                <PerfumeModel
                    modelPath={modelPath}
                    scale={scale}
                    position={position}
                    rotation={rotation}
                    autoRotate={autoRotate}
                    autoRotateSpeed={autoRotateSpeed}
                    floatAmplitude={floatAmplitude}
                    floatSpeed={floatSpeed}
                />

                {/* Subtle floor shadow */}
                <ContactShadows
                    position={[0, -1.5, 0]}
                    opacity={0.15}
                    scale={6}
                    blur={2.5}
                    far={4}
                />

                {/* Controls */}
                {interactive && (
                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.8}
                        autoRotate={false}
                        dampingFactor={0.05}
                        enableDamping
                    />
                )}
            </Canvas>
        </div>
    )
}
