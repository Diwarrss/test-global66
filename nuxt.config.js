export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loading: '~/components/Loading.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-global66',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],

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
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-clipboard2',
  ],

  styleResources: {
    scss: ['~assets/scss/_mixins.scss'],
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.apiBaseUrl,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extends(config) {
      // for using images in folder 'assets' also in data attribute 'data-src'
      // useful for lazy loading
      // https://github.com/nuxt/nuxt.js/issues/2650
      const vueLoader = config.module.rules.find(
        (rule) => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformToRequire.img = ['src', 'data-src']
    },
  },
}
