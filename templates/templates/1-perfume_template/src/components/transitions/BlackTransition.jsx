import React from 'react'

/**
 * BlackTransition — Black screen between product slides.
 * 
 * Creates the "fade to black → next product" effect.
 * Can be upgraded with GSAP animations later.
 */
export default function BlackTransition({ height = '30vh' }) {
    return (
        <div
            className="black-transition"
            style={{ height }}
            aria-hidden="true"
        />
    )
}
