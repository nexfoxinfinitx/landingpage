import React, { useRef, useEffect } from 'react'
import { useSectionProgress } from '@hooks/useScrollProgress'
import { getLayerAssets } from '@utils/assetManager'
import BottleScene from '@components/canvas/BottleScene'
import { getModelPath } from '@utils/assetManager'

/**
 * HeroSection — Landing page hero.
 * 
 * Full-screen 3D bottle floating center.
 * Text: tagline based on latest product.
 * Scroll drives: bottle zoom → rotation → cap fills screen.
 * Cloud layers frame the scene.
 * 
 * Uses a 300vh container with sticky inner for scroll runway.
 */
export default function HeroSection({ product }) {
    const sectionRef = useRef(null)
    const stickyRef = useRef(null)
    const taglineRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const badgeRef = useRef(null)
    const progress = useSectionProgress(sectionRef)

    const layers = getLayerAssets()
    const cloudBorder = layers.find((l) => l.id === 'cloud-border')
    const cloudSky = layers.find((l) => l.id === 'cloud-sky')

    // Scroll-driven transforms
    // Phase 1 (0-0.3): Text fades in, bottle floating
    // Phase 2 (0.3-0.7): Bottle zooms toward camera
    // Phase 3 (0.7-1.0): Bottle fills screen, transition out
    const bottleScale = 1 + progress * 3
    const bottleOpacity = progress > 0.85 ? 1 - (progress - 0.85) / 0.15 : 1
    // Text visible at start, fades out as bottle zooms
    const textOpacity = progress > 0.3 ? Math.max(0, 1 - (progress - 0.3) / 0.2) : 1
    const overlayOpacity = progress > 0.8 ? (progress - 0.8) / 0.2 : 0

    return (
        <section className="hero" ref={sectionRef} id="hero">
            <div className="hero__sticky" ref={stickyRef}>
                {/* Background Sky */}
                {cloudSky && (
                    <div className="hero__background">
                        <img src={cloudSky.src} alt="" aria-hidden="true" />
                    </div>
                )}

                {/* 3D Bottle */}
                <div
                    className="hero__canvas-wrapper"
                    style={{
                        transform: `scale(${bottleScale})`,
                        opacity: bottleOpacity,
                        transition: 'opacity 0.1s',
                    }}
                >
                    <BottleScene
                        modelPath={getModelPath(product?.slug)}
                        scale={2}
                        interactive={progress < 0.3}
                        autoRotate={true}
                    />
                </div>

                {/* Text Overlay */}
                <div
                    className="hero__text-overlay"
                    style={{ opacity: Math.max(0, textOpacity) }}
                >
                    <p
                        className="hero__tagline"
                        ref={taglineRef}
                        style={{ opacity: textOpacity }}
                    >
                        {product?.tagline || 'LATEST RELEASE'}
                    </p>
                    <h1
                        className="hero__title"
                        ref={titleRef}
                        style={{ opacity: textOpacity }}
                    >
                        {product?.name || 'Maison Élysée'}
                    </h1>
                    <p
                        className="hero__subtitle"
                        ref={subtitleRef}
                        style={{ opacity: textOpacity }}
                    >
                        {product?.flavor || 'The Art of Fragrance'}
                    </p>
                </div>

                {/* Badge */}
                <div
                    className="hero__badge"
                    ref={badgeRef}
                    style={{ opacity: Math.max(0, textOpacity) }}
                >
                    {product?.tagline || 'LIMITED EDITION'}
                </div>

                {/* Cloud Layers — Foreground framing */}
                {cloudBorder && (
                    <>
                        <div
                            className="hero__cloud-layer hero__cloud-layer--top"
                            style={{
                                transform: `translateY(${progress * -40}px)`,
                            }}
                        >
                            <img src={cloudBorder.src} alt="" aria-hidden="true" />
                        </div>
                        <div
                            className="hero__cloud-layer hero__cloud-layer--bottom"
                            style={{
                                transform: `scaleY(-1) translateY(${progress * -30}px)`,
                            }}
                        >
                            <img src={cloudBorder.src} alt="" aria-hidden="true" />
                        </div>
                    </>
                )}

                {/* Transition overlay — fades to black at end of hero */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--color-bg-black)',
                        opacity: overlayOpacity,
                        zIndex: 'var(--z-ui)',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </section>
    )
}
