import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
      VitePWA({
        registerType: 'autoUpdate', // Automatically update the service worker
        includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
        devOptions: {
          enabled: true,
          type: 'module',
        },
        workbox: {
          globPatterns: ['**/*.{ts,js,css,html,ico,png,svg,json,vue,txt,woff2}']
        },
        manifest: {
          name: 'Hacker News Clone',
          short_name: 'hnclone',
          description: 'Brief description about HNClone',
          theme_color: '#52a8f2',
          background_color: "#52a8f2",
          display: "standalone",
          start_url: "/",
          icons: [
              {
                "src": "/web-app-manifest-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
              },
              {
                "src": "/web-app-manifest-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
              }
            ]
         }
      }),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
