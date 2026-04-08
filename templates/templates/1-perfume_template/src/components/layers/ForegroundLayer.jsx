import React from 'react'

/**
 * ForegroundLayer — Studio-style decorative depth elements.
 * Z-index: 40 (topmost)
 * Blurred PNGs/SVGs that cover ≤20% of viewport.
 * Creates a "shot through the studio" feel.
 */
export default function ForegroundLayer({
    images = [],
    src,
    parallaxY = 0,
    style = {},
}) {
    // If a single src is provided, use default dual positioning
    if (src && images.length === 0) {
        images = [
            { src, position: 'fg-top-left', opacity: 0.5 },
            { src, position: 'fg-bottom-right', opacity: 0.6 },
        ]
    }

    return (
        <div
            className="layer layer--foreground"
            style={{
                ...style,
                transform: `translate3d(0, ${parallaxY}px, 0)`,
            }}
        >
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src || src}
                    alt=""
                    className={img.position || ''}
                    style={{
                        opacity: img.opacity ?? 0.5,
                        filter: `blur(${img.blur ?? 2}px)`,
                    }}
                    loading="eager"
                    decoding="async"
                    aria-hidden="true"
                />
            ))}
        </div>
    )
}
