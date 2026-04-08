import React from 'react'
import products from '@data/products'
import { getProductAssets } from '@utils/assetManager'
import LayerCompositor from '@components/layers/LayerCompositor'
import BottleScene from '@components/canvas/BottleScene'
import BlackTransition from '@components/transitions/BlackTransition'

/**
 * ProductsSection — Infinite-scroll product showcase.
 * 
 * Each product gets a full-viewport LayerCompositor with all 4 layers.
 * Black transition screens separate products.
 * 
 * Currently renders all products in order.
 * Will be upgraded to true infinite scroll later.
 */
export default function ProductsSection() {
    return (
        <section className="products-section" id="products">
            {products.map((product, index) => {
                const assets = getProductAssets(product.slug)

                return (
                    <React.Fragment key={product.id}>
                        {/* Black transition between products */}
                        {index > 0 && <BlackTransition />}

                        {/* Product slide — full viewport */}
                        <div className="product-slide" id={`product-${product.slug}`}>
                            <LayerCompositor
                                product={product}
                                backgroundSrc={assets.background}
                                foregroundSrc={assets.foreground}
                                bottleContent={
                                    <BottleScene
                                        modelPath={assets.model}
                                        scale={2.5}
                                        interactive={true}
                                        autoRotate={true}
                                    />
                                }
                            />
                        </div>
                    </React.Fragment>
                )
            })}
        </section>
    )
}
