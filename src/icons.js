// Centralized PNG icon paths
// Drop your .png files into assets/icons/ and add them here.
// Import this file wherever you need icons in the app.

export const icons = {
    // Navigation icons
    home: '/assets/icons/home.png',
    about: '/assets/icons/about.png',
    work: '/assets/icons/work.png',
    process: '/assets/icons/process.png',
    contact: '/assets/icons/contact.png',

    // Service icons
    design: '/assets/icons/design.png',
    development: '/assets/icons/development.png',
    ecommerce: '/assets/icons/ecommerce.png',
    seo: '/assets/icons/seo.png',
    maintenance: '/assets/icons/maintenance.png',
    saas: '/assets/icons/saas.png',

    // Add more icons here as you drop them into assets/icons/
};

// Helper: create an <img> tag from an icon key
// Usage in an HTML template string: ${iconImg('home', 'Home')}
export function iconImg(key, alt = '', size = 24) {
    return `<img src="${icons[key]}" alt="${alt}" width="${size}" height="${size}" loading="lazy" />`;
}
