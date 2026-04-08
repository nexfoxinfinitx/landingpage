/**
 * Asset Manager — Centralized asset path resolution & preloading
 *
 * ====================================================
 * HOW ASSETS ARE ORGANIZED:
 * ====================================================
 *
 *   /foreground/appetite_foreground.png     ← studio foreground overlay
 *   /background/appetite_background_1.jpg  ← background for Appetite
 *   /background/rover_background_1.jpg     ← background for Rover
 *   /background/parfum_background.webp     ← background for Parfum
 *   /perfumes_bottles_glb_files/appetite.glb  ← 3D bottle model
 *   /perfumes_bottles_glb_files/rover.glb
 *   /perfumes_bottles_glb_files/parfum.glb
 *
 * TO ADD A NEW PRODUCT:
 *   1. Drop foreground PNG into /foreground/
 *   2. Drop background image into /background/
 *   3. Drop GLB model into /perfumes_bottles_glb_files/
 *   4. Import them below and add to PRODUCT_ASSETS
 *   5. Add product entry in products.js
 *   Done.
 * ====================================================
 */

// ─── GLB Models ─────────────────────────────────────
import appetiteModel from '@models/anneasee_final.glb'
import roverModel from '@models/Rover5.glb'
import parfumModel from '@models/parfum_bottle.glb'


// ─── Background Images ──────────────────────────────
import appetiteBackground from '@foreground/anneasee_background.png'
import roverBackground from '@foreground/Rover_background.png'
import parfumBackground from '@background/parfum_background.webp'

// ─── Shared / Fallback layers ────────────────────────
// NOTE: cloud_test.jpg and test_png.png no longer exist in source.
// If you need hero section layers, drop images into assets/layers/
// and uncomment the imports below:
// import cloudSky from '@assets/layers/cloud_test.jpg'
// import cloudBorder from '@assets/layers/test_png.png'

/**
 * Per-product asset map (indexed 1–3).
 *
 * ┌─────────────┬────────────────────────────────────────────┐
 * │ Key         │ What it controls                           │
 * ├─────────────┼────────────────────────────────────────────┤
 * │ foreground  │ PNG overlaid on top (studio depth effect)  │
 * │ model       │ GLB 3D bottle file path                    │
 * │ background  │ Full-screen background image               │
 * └─────────────┴────────────────────────────────────────────┘
 */
const PRODUCT_ASSETS = {
    1: {
        model: appetiteModel,
        background: appetiteBackground,
    },
    2: {
        model: roverModel,
        background: roverBackground,
    },
    3: {
        model: parfumModel,
        background: parfumBackground,
    },
}

// ─── Fallback defaults (used if a product has no entry) ──
const FALLBACKS = {
    model: appetiteModel,
    background: appetiteBackground,
}

// ====================================================
// PUBLIC API
// ====================================================

/**
 * Get assets for a product by its index (1-based).
 * Returns { foreground, model, background } — resolved URLs.
 */
export function getProductAssets(productIndex) {
    const entry = PRODUCT_ASSETS[productIndex] || {}
    return {
        model: entry.model || FALLBACKS.model,
        background: entry.background || FALLBACKS.background,
    }
}

/**
 * Get shared layer assets.
 * NOTE: cloud layer files were removed. Drop new images into
 * assets/layers/ and update imports above to restore hero layers.
 * Returns empty array until layer images are provided.
 */
export function getLayerAssets() {
    return []
}

/**
 * Get 3D model path by product index.
 */
export function getModelPath(productIndex) {
    const entry = PRODUCT_ASSETS[productIndex]
    return entry?.model || FALLBACKS.model
}

/**
 * Preload a single image — returns a promise.
 */
export function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => resolve(null) // graceful fail
        img.src = src
    })
}

/**
 * Preload all critical assets (images + GLB preloads).
 * Called by usePreloader hook at startup.
 */
export async function preloadAllAssets(onProgress) {
    const allImages = []

    // Per-product background images
    for (const idx of Object.keys(PRODUCT_ASSETS)) {
        const a = PRODUCT_ASSETS[idx]
        if (a.background) allImages.push(a.background)
    }

    // De-duplicate (appetite foreground is reused)
    const uniqueImages = [...new Set(allImages)]

    const total = uniqueImages.length
    let loaded = 0

    const promises = uniqueImages.map((src) =>
        preloadImage(src).then(() => {
            loaded++
            onProgress?.(loaded / total)
        })
    )

    await Promise.all(promises)
}

/**
 * GLB model paths for R3F preloading.
 * Call useGLTF.preload() with these in your app entry or products page.
 */
export const ALL_MODEL_PATHS = [appetiteModel, roverModel, parfumModel]
