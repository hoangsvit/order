export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - EC Cloud",
    htmlAttrs: {
      prefix: "og: http://ogp.me/ns#",
    },
    headAttrs: {
      prefix:
        "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "author",
        content: "FOODCONNECTION",
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes",
      },
      // SEO
      { hid: "description", name: "description", content: "Cloud" },
      { hid: "keywords", name: "keywords", content: "Cloud" },
      // Mobile
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "format-detection",
        content: "telephone=no, date=no, address=no, email=no",
      },
      // Profile
      /* {
        name: "canonical",
        content: "https://www.totalworkout-recruit.jp/"
      } */
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/shared/css/common.css", mode: "client" },
      {
        rel: "stylesheet",
        href: "/shared/css/hamburgers.min.css",
        mode: "client",
      },
      {
        rel: "stylesheet",
        href: "/shared/css/animate.min.css",
        mode: "client",
      },
      {
        rel: "stylesheet",
        href: "/shared/css/shared.css",
        mode: "client",
      },
      {
        rel: "stylesheet",
        href: "/shared/css/slick.min.css",
        mode: "client",
      },
      {
        rel: "stylesheet",
        href: "/shared/css/jquery-confirm.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
      },
    ],
    script: [
      { src: "/shared/js/base.js", body: true, ssr: true },
      { src: "/shared/js/autoload.js", body: true, ssr: true },
      { src: "/shared/js/common.js", body: true, ssr: true },
      { src: "/shared/js/viewport.js", body: true, ssr: true },
      { src: "/shared/js/jquery.slick.min.js", body: true, ssr: true },
      { src: "/shared/js/shared.js", body: true, ssr: false },
      {
        src: "/shared/js/jquery-confirm.min.js",
        body: true,
        ssr: false,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/datepicker.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/apexcharts/initial.js" },
    { src: "~/plugins/progressbar.js" },
    { src: "~/plugins/vue-toastification.js" },
    { src: "~/plugins/vee-validate.js" },
    { src: "~/plugins/vue-paginate.js" },
    { src: "~/plugins/datepicker.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ["@nuxtjs/dotenv", { filename: `.env.${process.env.NODE_ENV}` }],
    "@nuxtjs/moment",
  ],

  // MomentJS
  moment: {
    timezone: true,
    defaultTimezone: "Asia/Tokyo",
    locales: ["ja"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo", "@nuxtjs/axios", "vue-scrollto/nuxt"],

  // Apollo
  apollo: {
    clientConfigs: {
      default: "~/plugins/apollo-client.js",
    },
    errorHandler: "~/plugins/apollo-error-handler.js",
    // Sets the authentication type for any authorized request.
    authenticationType: "Bearer",
    // Token name for the cookie which will be set in case of authentication
    tokenName: "fc-cloud-token",
    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
       * Define when the cookie will be removed. Value can be a Number
       * which will be interpreted as days from time of creation or a
       * Date instance. If omitted, the cookie becomes a session cookie.
       */
      expires: 1,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    // trailingSlash: false,
    mode: "history",
  },

  loading: "~/components/LoadingBar.vue",
};
