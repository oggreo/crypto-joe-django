export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crypto-joe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  env: {
    STRIPE_PK: process.env.STRIPE_PK
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/route.js',
      mode: 'client'
    },
    {
      src: '~/plugins/velocity.js',
      mode: 'client'
    },
    {
      src: '~/plugins/vue-stripe.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    prefetch: true,
    families: {
      Montserrat: true,
      Roboto: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/firebase'],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyAVfIYnLCZy6BFggWkdYJZz6KVKD-vYk3U',
      authDomain: 'cryp-to-joe.firebaseapp.com',
      projectId: 'cryp-to-joe"',
      storageBucket: 'cryp-to-joe.appspot.com',
      messagingSenderId: '169318718244',
      appId: '1:169318718244:web:446ad77b4f10f977b231b1',
      databaseURL: 'https://cryp-to-joe-default-rtdb.europe-west1.firebasedatabase.app/'
    },
    services: {
      database: true
      // Just as example. Can be any other service.
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
