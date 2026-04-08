import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getModelPath, getLayerAssets } from '@utils/assetManager'
import FixedScene from '@components/canvas/FixedScene'
import SequenceBackground from '@components/canvas/SequenceBackground'
import VideoSection from '@components/sections/VideoSection'

/**
 * MainPage — Landing page (web-sandbox architecture).
 * 
 * Structure (matching web-sandbox pattern):
 *   1. SequenceBackground — Fixed canvas at z:-1 (image sequence / static bg)
 *   2. FixedScene — Fixed R3F Canvas at z:0 (3D bottle, GSAP scroll-driven)
 *   3. #scroll-container — Scrollable content at z:10 (text sections + CTA)
 * 
 * The 3D bottle is FIXED on screen and animates via GSAP ScrollTrigger
 * as the user scrolls through the content sections.
 */
export default function MainPage() {
    const navigate = useNavigate()
    const layers = getLayerAssets()
    const cloudBorder = layers.find((l) => l.id === 'cloud-border')

    const handleExploreProducts = () => {
        navigate('/products')
    }

    return (
        <main className="main-page">
            {/* Layer 1: Fixed Canvas Background (image sequence / static sky) */}
            <SequenceBackground />

            {/* Layer 2: Fixed 3D Scene (perfume bottle, GSAP scroll-driven) */}
            <FixedScene modelPath={getModelPath(1)} />

            {/* Layer 3: Scrollable Content (text overlays on top) */}
            <div id="scroll-container" className="scroll-container">
                {/* Section 1: Hero — Title + tagline */}
                <section className="scroll-section scroll-section--hero">
                    {/* Cloud foreground framing — top */}
                    {cloudBorder && (
                        <div className="hero__cloud-layer hero__cloud-layer--top">
                            <img src={cloudBorder.src} alt="" aria-hidden="true" />
                        </div>
                    )}

                    <div className="scroll-section__content scroll-section__content--center">
                        <p className="hero__tagline">NEXFOX'S</p>
                        <h1 className="hero__title">Maison Élysée</h1>
                        <p className="hero__subtitle">The Art of Fragrance</p>
                    </div>

                    <div className="hero__badge">LIMITED EDITION</div>

                    {/* Cloud foreground framing — bottom */}
                    {cloudBorder && (
                        <div className="hero__cloud-layer hero__cloud-layer--bottom">
                            <img src={cloudBorder.src} alt="" aria-hidden="true" />
                        </div>
                    )}
                </section>

                {/* Section 2: Mid-scroll — product reveal text */}
                <section className="scroll-section scroll-section--reveal">
                    <div className="scroll-section__content scroll-section__content--left">
                        <h2 className="reveal-text font-display">Appetite</h2>
                        <p className="reveal-subtext font-accent">
                            Rich Spice & Warm Amber
                        </p>
                    </div>
                </section>

                {/* Video Section between Reveal and CTA */}
                <VideoSection />

                {/* Section 3: End scroll — CTA to products */}
                <section className="scroll-section scroll-section--cta">
                    <div className="scroll-section__content scroll-section__content--center">
                        <p className="cta-section__label">EXPLORE THE COLLECTION</p>
                        <h2 className="cta-section__title">Discover Our Fragrances</h2>
                        <p className="cta-section__subtitle">
                            Each scent tells a story. Find yours.
                        </p>
                        <button
                            className="cta-section__button"
                            onClick={handleExploreProducts}
                            style={{ pointerEvents: 'auto' }}
                        >
                            <span>View Products</span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}
