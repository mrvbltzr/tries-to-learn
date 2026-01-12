import path from 'node:path';

import { defineConfig } from 'vite';

export default defineConfig({
    base: '/tries-to-learn/javascript/',
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
    build: {
        minify: 'terser',
        rollupOptions: {
            onwarn: function (warning, warn) {
                if (warning.code === 'EVAL' || warning.message.includes('reassign a variable')) {
                    return;
                }

                warn(warning);
            },
        },
    },
});
