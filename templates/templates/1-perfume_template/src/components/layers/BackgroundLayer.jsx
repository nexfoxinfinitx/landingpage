import React from 'react'

/**
 * BackgroundLayer — Static background image or image sequence.
 * Z-index: 10 (lowest layer)
 * No animations, changes per product theme.
 */
export default function BackgroundLayer({ src, alt = 'Background', style = {} }) {
    return (
        <div className="layer layer--background" style={style}>
            <img
                src={src}
                alt={alt}
                loading="eager"
                decoding="async"
            />
        </div>
    )
}
