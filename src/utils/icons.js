// Centralized PNG icon paths
// Drop your .png files into public/icons/ and add them here.
// Import this file wherever you need icons in the app.

export const icons = {
    // Navigation icons
    home: '/icons/home.png',
    about: '/icons/about.png',
    work: '/icons/work.png',
    process: '/icons/process.png',
    contact: '/icons/contact.png',

    // Service icons
    design: '/icons/design.png',
    development: '/icons/development.png',
    ecommerce: '/icons/ecommerce.png',
    seo: '/icons/seo.png',
    maintenance: '/icons/maintenance.png',
    saas: '/icons/saas.png',

    // Add more icons here as you drop them into public/icons/
};

// Helper: create an <img> tag from an icon key
// Usage in an HTML template string: ${iconImg('home', 'Home')}
export function iconImg(key, alt = '', size = 24) {
    return `<img src="${icons[key]}" alt="${alt}" width="${size}" height="${size}" loading="lazy" />`;
}
