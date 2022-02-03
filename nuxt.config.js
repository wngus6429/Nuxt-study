export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    // 서버 커스텀, default: 3000
    // 배포할떄 포트가 5000번이 되지 않게 한다
    port: process.env.NODE_ENV === 'production' ? null : 5000,
  },
  env: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://my-json-server.typicode.com/wngus6429/Nuxt-study-api'
        : 'http://localhost:3000',
  },
  head: {
    title: 'Park Shopping',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'park study shopping',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/reset.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
