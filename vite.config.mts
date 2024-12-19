/// <reference types="vitest" />

import angular from '@analogjs/vite-plugin-angular';

import { defineConfig } from 'vite';
import {nxViteTsPaths} from "@nx/vite/plugins/nx-tsconfig-paths.plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      angular(),
      nxViteTsPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
