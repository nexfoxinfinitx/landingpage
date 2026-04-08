import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGLTF } from '@react-three/drei'
import products from '@data/products'
import { getProductAssets, ALL_MODEL_PATHS } from '@utils/assetManager'
import { getLayerConfig } from '@utils/layerConfig'
import BottleScene from '@components/canvas/BottleScene'

// ─── Preload all GLB models at module level for instant loading ───
ALL_MODEL_PATHS.forEach((path) => useGLTF.preload(path))

/**
 * ProductsPage — Full-screen snap-scroll product showcase.
 *
 * Each product fills the entire viewport. Scrolling snaps
 * to the next product (roulette-style). No infinite scroll,
 * no foreground layers, no black transitions.
 *
 * Products: Appetite → Rover → Parfum (3 snap sections)
 */
export default function ProductsPage() {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <main className="products-page">
            {/* Back button — fixed top-left */}
            <button
                className="products-page__back"
                onClick={handleBack}
                aria-label="Back to main page"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
            </button>

            {/* Product slides — exactly one per product */}
            {products.map((product, index) => {
                const assets = getProductAssets(product.index)
                const config = getLayerConfig(product.slug)
                const isLeft = config.text.alignment === 'left'

                return (
                    <div
                        key={`slide-${product.slug}`}
                        className="product-slide"
                    >
                        {/* BACKGROUND — full-bleed image */}
                        <div className="layer layer--background">
                            <img
                                src={assets.background}
                                alt=""
                                aria-hidden="true"
                                style={{ opacity: config.background.opacity }}
                            />
                        </div>

                        {/* MIDDLE — 3D perfume bottle, centered */}
                        <div className="layer layer--middle" style={{ zIndex: 20 }}>
                            <BottleScene
                                modelPath={assets.model}
                                scale={config.middle.scale}
                                position={config.middle.position}
                                rotation={config.middle.rotation}
                                interactive={config.middle.interactive}
                                autoRotate={true}
                                autoRotateSpeed={config.middle.autoRotateSpeed}
                                floatAmplitude={config.middle.floatAmplitude}
                                floatSpeed={config.middle.floatSpeed}
                            />
                        </div>

                        {/* TEXT — product info overlay */}
                        <div
                            className="layer layer--text"
                            style={{
                                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                                paddingLeft: isLeft ? config.text.offsetX : undefined,
                                paddingRight: !isLeft ? config.text.offsetX.replace('-', '') : undefined,
                            }}
                        >
                            <div className="product-info">
                                <p className="product-info__label">{product.tagline}</p>
                                <h2 className="product-info__name">{product.name}</h2>
                                <p className="product-info__flavor">{product.flavor}</p>
                                <p className="product-info__description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}
