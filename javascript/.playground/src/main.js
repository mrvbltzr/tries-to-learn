import { challengesPage } from '@/pages/challenges';
import { snippetsPage } from '@/pages/snippets';

(function () {
    const logoEl = document.getElementById('logo');
    const navEl = document.getElementById('navigation');
    const appEl = document.getElementById('app');

    if (!navEl || !appEl) {
        throw new Error("Necessary elements with ids 'navigation' and 'app' not found.");
    }

    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    if (page && page === 'challenges') {
        return challengesPage(logoEl, appEl);
    }

    return snippetsPage(logoEl, navEl, appEl, params);
})();
