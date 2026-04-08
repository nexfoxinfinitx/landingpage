/**
 * Layer Configuration — Per-product layer settings
 *
 * ====================================================
 * HOW TO TWEAK PER-PRODUCT VISUALS:
 * ====================================================
 *
 * Each product can override any of the default layer settings.
 * Only specify what differs from the defaults below.
 *
 * TWEAKABLE VALUES (with explanations):
 *
 * foreground:
 *   images[]         — Array of { position, opacity, blur } for each FG image
 *     position       — CSS class: 'fg-top-left', 'fg-top-right', 'fg-bottom-right', 'fg-bottom-left'
 *     opacity        — 0 to 1 (how visible the foreground element is)
 *     blur           — px value for CSS blur filter (0 = sharp, 5 = very blurry)
 *   parallaxDepth    — 0 to 1 (how much foreground moves on scroll; higher = more movement)
 *   scrollDirection  — 'up' means it moves opposite to scroll direction
 *
 * middle (3D bottle):
 *   scale            — Model scale multiplier (1 = default blender export size)
 *                       Start with 1 and go up/down from there
 *   position         — [x, y, z] position in 3D space. [0, 0, 0] = center
 *                       x: negative = left, positive = right
 *                       y: negative = down, positive = up
 *                       z: negative = into screen, positive = toward viewer
 *   rotation         — [x, y, z] initial rotation in RADIANS
 *                       Use Math.PI / N for fractions of 180°
 *                       Example: [0, Math.PI / 4, 0] = 45° Y rotation
 *   parallaxDepth    — 0 to 1 (subtle bottle movement on scroll)
 *   interactive      — true/false (enable drag-to-rotate orbit controls)
 *   autoRotateSpeed  — Speed of auto Y-rotation (higher = faster)
 *   floatAmplitude   — How far the bottle floats up/down (in 3D units)
 *   floatSpeed       — How fast the floating animation cycles
 *
 * text:
 *   alignment        — 'left' | 'right' | 'center' (where text appears)
 *   offsetX          — CSS value for horizontal offset (e.g. '8%', '-8%')
 *   offsetY          — CSS value for vertical offset
 *   animationDelay   — Seconds to delay text fade-in animation
 *   parallaxDepth    — 0 to 1 (text scroll movement amount)
 *
 * background:
 *   type             — 'static' | 'sequence' (static image or image sequence)
 *   fit              — CSS object-fit value ('cover', 'contain', etc.)
 *   opacity          — 0 to 1 (background image opacity)
 *
 * ====================================================
 */

export const defaultLayerConfig = {
    middle: {
        scale: 1.5,              // ← Start here, adjust per product
        position: [0, -0.5, 0],  // ← Slightly below center
        rotation: [0, 0, 0],
        parallaxDepth: 0.08,
        interactive: true,
        autoRotateSpeed: 1.5,
        floatAmplitude: 0.08,
        floatSpeed: 1.5,
    },
    text: {
        alignment: 'left',
        offsetX: '8%',
        offsetY: '0%',
        animationDelay: 0.2,
        parallaxDepth: 0.05,
    },
    background: {
        type: 'static',
        fit: 'cover',
        opacity: 1,
    },
}

/**
 * Per-product overrides — customize any layer per product.
 * Only specify what differs from defaultLayerConfig.
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │ TO TWEAK A PRODUCT:                                         │
 * │ 1. Find the product slug below (appetite / rover / parfum)  │
 * │ 2. Change any value — only specify what you want different   │
 * │ 3. Save and hot-reload picks it up instantly                 │
 * └──────────────────────────────────────────────────────────────┘
 */
const productConfigs = {
    'appetite': {
        middle: {
            scale: 0.5,
            position: [0, -0.5, 0],
            rotation: [0, 0, 0],
            autoRotateSpeed: 1.5,
            floatAmplitude: 0.08,
            floatSpeed: 1.5,
        },
        text: {
            alignment: 'left',
            offsetX: '8%',
        },
    },

    'rover': {
        middle: {
            scale: 0.5,
            position: [0, -0.5, 0],
            rotation: [0, 0, 0],
            autoRotateSpeed: 1.8,
            floatAmplitude: 0.06,
            floatSpeed: 1.2,
        },
        text: {
            alignment: 'right',
            offsetX: '-8%',
        },
    },

    'parfum': {
        middle: {
            scale: 0.5,
            position: [0, -0.5, 0],
            rotation: [0, 0, 0],
            autoRotateSpeed: 0.5,
            floatAmplitude: 0.1,
            floatSpeed: 0.8,
        },
        text: {
            alignment: 'left',
            offsetX: '8%',
        },
    },
}

/**
 * Get layer config for a specific product.
 * Falls back to default for any unspecified values.
 *
 * @param {string} productSlug — e.g. 'appetite', 'rover', 'parfum'
 * @returns {Object} merged config with defaults
 */
export function getLayerConfig(productSlug) {
    const overrides = productConfigs[productSlug] || {}

    return {
        middle: { ...defaultLayerConfig.middle, ...overrides.middle },
        text: { ...defaultLayerConfig.text, ...overrides.text },
        background: { ...defaultLayerConfig.background, ...overrides.background },
    }
}
