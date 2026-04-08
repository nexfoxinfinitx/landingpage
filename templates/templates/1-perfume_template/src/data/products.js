/**
 * Product Catalog Data
 *
 * Single source of truth for all products.
 * 
 * ====================================================
 * HOW TO EDIT PRODUCT INFO:
 * ====================================================
 * 
 * Each product object below has these fields you can tweak:
 * 
 *   name        — Display name on the product slide
 *   tagline     — Small uppercase label (e.g. "LATEST RELEASE")
 *   flavor      — Italic subtitle describing the scent profile
 *   description — Paragraph of text shown beside the bottle
 *   notes       — Top / heart / base fragrance notes
 *   price       — Display price string
 *   theme.accent — Hex color used for accent elements
 *   theme.mood   — 'warm' | 'cool' | 'neutral' (for future theming)
 * 
 * To add a new product:
 *   1. Add an entry here with the next index
 *   2. Add matching assets (see assetManager.js)
 *   3. Add layer config overrides (see layerConfig.js)
 *   Done — no component changes needed.
 * ====================================================
 */

const products = [
    {
        index: 1,
        slug: 'appetite',
        name: 'Appetite',
        tagline: 'LATEST RELEASE',
        flavor: 'Rich Spice & Warm Amber',
        description:
            'An intoxicating blend that awakens the senses. Rich spices intertwine with warm amber and a hint of smoky leather, creating an irresistible allure.',
        notes: {
            top: ['Saffron', 'Cardamom', 'Pink Pepper'],
            heart: ['Amber', 'Oud', 'Rose Absolute'],
            base: ['Leather', 'Sandalwood', 'Vanilla'],
        },
        price: '$285',
        theme: { accent: '#8b6f47', mood: 'warm' },
    },
    {
        index: 2,
        slug: 'rover',
        name: 'Rover',
        tagline: 'LIMITED EDITION',
        flavor: 'Ocean Breeze & Driftwood',
        description:
            'The spirit of adventure captured in a bottle. Fresh ocean breeze mingles with sun-bleached driftwood and wild coastal herbs.',
        notes: {
            top: ['Sea Salt', 'Bergamot', 'Grapefruit'],
            heart: ['Marine Accord', 'Lavender', 'Geranium'],
            base: ['Driftwood', 'Ambergris', 'White Musk'],
        },
        price: '$320',
        theme: { accent: '#5a7d8a', mood: 'cool' },
    },
    {
        index: 3,
        slug: 'parfum',
        name: 'Parfum',
        tagline: 'INTRODUCING NEW',
        flavor: 'Pure Elegance & Silk Accord',
        description:
            'The quintessence of refined luxury. A silken tapestry of rare florals and precious woods, crafted for those who demand nothing less than perfection.',
        notes: {
            top: ['Aldehydes', 'Violet Leaf', 'Blackcurrant'],
            heart: ['Iris Absolute', 'Jasmine Sambac', 'Orris'],
            base: ['Cashmere Wood', 'Amber', 'Tonka Bean'],
        },
        price: '$350',
        theme: { accent: '#a0856e', mood: 'neutral' },
    },
]

export default products

export function getProductBySlug(slug) {
    return products.find((p) => p.slug === slug) || null
}

export function getProductByIndex(index) {
    const wrappedIndex = ((index % products.length) + products.length) % products.length
    return products[wrappedIndex]
}

export function getProductCount() {
    return products.length
}
