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
        find: '@body-ui/button',
        replacement: path.resolve(ROOT_PATH, 'packages/@body-ui/button/src'),
      },
      {
        find: '@body-ui/core',
        replacement: path.resolve(ROOT_PATH, 'packages/@body-ui/core/src'),
      },
      {
        find: '@body-ui/layout',
        replacement: path.resolve(ROOT_PATH, 'packages/@body-ui/layout/src'),
      },
      {
        find: '@body-ui/theme-default',
        replacement: path.resolve(ROOT_PATH, 'packages/@body-ui/theme-default/src'),
      },
      {
        find: '@body-ui/typography',
        replacement: path.resolve(ROOT_PATH, 'packages/@body-ui/typography/src'),
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
