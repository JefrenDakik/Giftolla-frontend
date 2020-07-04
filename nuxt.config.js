
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 8000, // default: 3000
  },
  srcDir: 'src/',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/colors.scss',
    '~/assets/styles/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components',
    '~/plugins/vee-validate',
    '~/plugins/inject-api',
    '~/plugins/axios-interceptor',
    {
      src: '~/plugins/nuxt-client-init.client',
      mode: 'client',
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  axios: {
    baseURL: 'http://localhost:8080',
    // credentials: false,
    // proxy: true,
    // retry: { retries: 3 }
  },
  styleResources: {
    scss: './assets/styles/colors.scss'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      'vee-validate/dist/rules'
    ],
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: 'http://localhost:8080'
  },
  router: {
    middleware: 'initAuth',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'active-link',
    linkPrefetchedClass: 'active-link'
  },
  transition: {
    // name: 'fade',
    // mode: 'out-in'
  }
}
