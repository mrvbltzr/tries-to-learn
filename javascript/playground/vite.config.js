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
            output: {
                manualChunks: (id) => {
                    if (!id.endsWith('.js')) {
                        return;
                    }

                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }

                    if (id.includes('src/data')) {
                        return 'data';
                    }

                    if (id.includes('src/components')) {
                        return 'components';
                    }
                },
            },
        },
    },
});
