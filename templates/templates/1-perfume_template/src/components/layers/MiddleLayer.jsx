import React from 'react'

/**
 * MiddleLayer — Houses the 3D perfume bottle.
 * Z-index: 20
 * Interactive — user can rotate the bottle.
 * Moves on scroll via parallax.
 */
export default function MiddleLayer({ children, style = {}, parallaxY = 0 }) {
    return (
        <div
            className="layer layer--middle"
            style={{
                ...style,
                transform: `translate3d(0, ${parallaxY}px, 0)`,
            }}
        >
            {children}
        </div>
    )
}
