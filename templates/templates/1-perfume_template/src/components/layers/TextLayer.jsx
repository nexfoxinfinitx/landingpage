import React from 'react'

/**
 * TextLayer — Product info text overlay.
 * Z-index: 30
 * Separate from bottle for independent animation control.
 */
export default function TextLayer({ product, alignment = 'left', style = {}, parallaxY = 0 }) {
    if (!product) return null

    const alignmentStyle = {
        left: { justifyContent: 'flex-start', textAlign: 'left' },
        right: { justifyContent: 'flex-end', textAlign: 'right' },
        center: { justifyContent: 'center', textAlign: 'center' },
    }

    return (
        <div
            className="layer layer--text"
            style={{
                ...alignmentStyle[alignment],
                ...style,
                transform: `translate3d(0, ${parallaxY}px, 0)`,
            }}
        >
            <div className="product-info">
                <p className="product-info__label">{product.tagline}</p>
                <h2 className="product-info__name">{product.name}</h2>
                <p className="product-info__flavor">{product.flavor}</p>
                <p className="product-info__description">{product.description}</p>
            </div>
        </div>
    )
}
