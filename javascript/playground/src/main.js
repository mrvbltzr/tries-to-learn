import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github-dark.min.css';

import '@/assets/styles.tailwind.css';

import { App } from '@/App.js';

(() => {
    const root = document.querySelector('#app');

    if (!root) {
        return console.error('Unable to attach the app to the DOM.');
    }

    hljs.registerLanguage('javascript', javascript);

    root.replaceChildren(App());
})();
