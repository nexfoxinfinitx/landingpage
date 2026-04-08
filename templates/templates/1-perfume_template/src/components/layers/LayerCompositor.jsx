import React, { useRef } from 'react'
import BackgroundLayer from './BackgroundLayer'
import MiddleLayer from './MiddleLayer'
import TextLayer from './TextLayer'
import ForegroundLayer from './ForegroundLayer'
import { useScrollProgress } from '@hooks/useScrollProgress'
import { getLayerConfig } from '@utils/layerConfig'

/**
 * LayerCompositor — Orchestrates all 4 layers for a single product view.
 * 
 * Renders layers in correct z-order:
 *   Background (z:10) → Middle/Bottle (z:20) → Text (z:30) → Foreground (z:40)
 * 
 * Drives parallax offsets based on scroll position.
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data from products.js
 * @param {string} props.backgroundSrc - Background image source
 * @param {string} props.foregroundSrc - Foreground image source
 * @param {React.ReactNode} props.bottleContent - 3D viewer component
 */
export default function LayerCompositor({
    product,
    backgroundSrc,
    foregroundSrc,
    bottleContent,
}) {
    const containerRef = useRef(null)
    const { progress } = useScrollProgress(containerRef)
    const config = getLayerConfig(product?.slug)

    // Calculate parallax offsets based on scroll progress
    // Centered at 0.5 progress = no offset
    const scrollDelta = (progress - 0.5) * 2 // -1 to 1
    const foregroundY = scrollDelta * config.foreground.parallaxDepth * -300
    const middleY = scrollDelta * config.middle.parallaxDepth * -200
    const textY = scrollDelta * config.text.parallaxDepth * -150

    return (
        <div className="layer-compositor" ref={containerRef}>
            {/* Layer 1: Background — z:10, static */}
            <BackgroundLayer src={backgroundSrc} alt={`${product?.name || 'Product'} background`} />

            {/* Layer 2: Middle — z:20, 3D bottle */}
            <MiddleLayer parallaxY={middleY}>
                {bottleContent}
            </MiddleLayer>

            {/* Layer 3: Text — z:30, product info */}
            <TextLayer
                product={product}
                alignment={config.text.alignment}
                parallaxY={textY}
                style={{
                    paddingLeft: config.text.alignment === 'left' ? config.text.offsetX : undefined,
                    paddingRight: config.text.alignment === 'right' ? config.text.offsetX : undefined,
                }}
            />

            {/* Layer 4: Foreground — z:40, studio depth */}
            <ForegroundLayer
                src={foregroundSrc}
                parallaxY={foregroundY}
            />
        </div>
    )
}
