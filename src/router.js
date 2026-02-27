// Simple hash-based SPA router
const routes = {};
let currentCleanup = null;

export function route(path, handler) {
    routes[path] = handler;
}

export function navigate(path) {
    window.location.hash = '#' + path;
}

export function getRoute() {
    const hash = window.location.hash.slice(1) || '/';
    return hash;
}

export function resolveRoute() {
    const path = getRoute();

    // Run cleanup from previous page
    if (currentCleanup && typeof currentCleanup === 'function') {
        currentCleanup();
        currentCleanup = null;
    }

    // Try exact match first
    if (routes[path]) {
        currentCleanup = routes[path]();
        window.scrollTo(0, 0);
        return;
    }

    // Try parameterized routes: /project/:slug
    for (const [pattern, handler] of Object.entries(routes)) {
        if (pattern.includes(':')) {
            const patternParts = pattern.split('/');
            const pathParts = path.split('/');
            if (patternParts.length === pathParts.length) {
                const params = {};
                let match = true;
                for (let i = 0; i < patternParts.length; i++) {
                    if (patternParts[i].startsWith(':')) {
                        params[patternParts[i].slice(1)] = pathParts[i];
                    } else if (patternParts[i] !== pathParts[i]) {
                        match = false;
                        break;
                    }
                }
                if (match) {
                    currentCleanup = handler(params);
                    window.scrollTo(0, 0);
                    return;
                }
            }
        }
    }

    // Fallback to home
    if (routes['/']) {
        currentCleanup = routes['/']();
        window.scrollTo(0, 0);
    }
}

export function startRouter() {
    window.addEventListener('hashchange', resolveRoute);
    resolveRoute();
}
