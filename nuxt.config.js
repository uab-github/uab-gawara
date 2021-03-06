export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'server',
  // async asyncData({route, store, error}) {
  //   let data = {
  //     title: ''
  //   }
  //   data.title=this.$store.state.cover.cover
  //   return
  // },
  head: {
    title: 'uab Garawa',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'apple-mobile-web-app-capable', content: "yes"},
      // {property: 'og:title', content: 'Garawa'},
      // {property: 'og:image', content: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg'},
      // {property: 'og:image', content: '/cover.jpg'},
      // {property: 'og:url', content: 'https://go.nuxtjs.dev/config-head'},
      // {property: 'og:site_name', content: 'Garawa'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/uab-fav.png'
      },
    ],
    script: [
      {src: '/js/vendor/modernizr-3.6.0.min.js'},
      {src: '/js/vendor/jquery-3.3.1.min.js'},
      {src: '/js/vendor/popper.min.js'},
      {src: '/js/vendor/bootstrap.min.js'},
      {src: '/js/plugins/slick.min.js'},
      {src: '/js/plugins/nice-select.min.js'},
      {src: '/js/plugins/plyr.min.js'},
      {src: '/js/plugins/perfect-scrollbar.min.js'},
      {src: '/js/plugins/lightgallery-all.min.js'},
      {src: '/js/plugins/imagesloaded.pkgd.min.js'},
      {src: '/js/main.js'},
    ],
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/vendor/bootstrap.min.css',
    '@/assets/css/vendor/bicon.min.css',
    '@/assets/css/vendor/flaticon.css',
    '@/assets/css/plugins/plyr.css',
    '@/assets/css/plugins/slick.min.css',
    '@/assets/css/plugins/nice-select.css',
    '@/assets/css/plugins/perfect-scrollbar.css',
    '@/assets/css/plugins/lightgallery.min.css',
    '@/assets/css/style.css',
    '@/assets/css/custom.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/infiniteloading', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-sweetalert2'
  ],


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['/js/main.js'],
  }
}
