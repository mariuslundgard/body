import path from 'path'
import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

const ROOT_PATH = path.resolve(__dirname, '../..')

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'public'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        frame: path.resolve(__dirname, 'src/frame/index.html'),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@body/button',
        replacement: path.resolve(ROOT_PATH, 'packages/@body/button/src'),
      },
      {
        find: '@body/core',
        replacement: path.resolve(ROOT_PATH, 'packages/@body/core/src'),
      },
      {
        find: '@body/layout',
        replacement: path.resolve(ROOT_PATH, 'packages/@body/layout/src'),
      },
      {
        find: '@body/theme-default',
        replacement: path.resolve(ROOT_PATH, 'packages/@body/theme-default/src'),
      },
      {
        find: '@body/typography',
        replacement: path.resolve(ROOT_PATH, 'packages/@body/typography/src'),
      },
      {
        find: 'react/jsx-dev-runtime',
        replacement: require.resolve('react/jsx-dev-runtime'),
      },
      {
        find: 'react/jsx-runtime',
        replacement: require.resolve('react/jsx-runtime'),
      },
      {
        find: 'react',
        replacement: require.resolve('react'),
      },
      {
        find: 'react-dom',
        replacement: require.resolve('react-dom'),
      },
    ],
  },
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 3000,
  },
})
