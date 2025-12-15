import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'


export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'T3Scene',
      formats: ['es', 'cjs'],
      fileName: (format) =>
        format === 'es' ? 'index.es.js' : 'index.js'
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'three',
        '@react-three/fiber',
        '@react-three/drei'
      ]
    }
  }
})
