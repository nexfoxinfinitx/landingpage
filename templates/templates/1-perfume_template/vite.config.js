import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@data': path.resolve(__dirname, './src/data'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@foreground': path.resolve(__dirname, './foreground'),
      '@background': path.resolve(__dirname, './background'),
      '@models': path.resolve(__dirname, './perfumes_bottles_glb_files'),
    },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
})
