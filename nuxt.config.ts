// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'FinIQ',
      short_name: 'FinIQ',
      description: 'A personal finance dashboard',
      theme_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/assets/logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/assets/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})