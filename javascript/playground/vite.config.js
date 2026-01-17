import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/tries-to-learn/javascript/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [tailwindcss()],
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
