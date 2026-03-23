import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3000
  },
  preview: {
    host: true,
    port: 3000
  },
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@models': path.resolve(__dirname, './src/models'),
      '@utilities': path.resolve(__dirname, './src/utilities'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
})
