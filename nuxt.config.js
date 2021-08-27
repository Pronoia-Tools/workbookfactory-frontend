export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'workbook-factory',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,400;1,600;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/scss/colors.scss', './assets/scss/main.scss'],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist.js', ssr: false },
    { src: '~/plugins/axios.js', ssr: true },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // https://vue.chakra-ui.com/with-nuxt
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxtjs/dayjs',
  ],

  dayjs: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    defaultTimeZone: 'Asia/Tokyo',
    plugins: ['utc', 'timezone'],
  },
  /**
   * Add extend the plugin options under the `chakra` key.
   **/
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          /* ... */
        },
      },
    },
    icons: {
      // ...
      extend: {
        editIcon: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
        },
        trashIcon: {
          path: `
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          `,
        },
        eyeIcon: {
          path: `<svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>`,
        },
        searchIcon: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
        },
        menuIcon: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
        },
        chevronRight: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="9 18 15 12 9 6"></polyline></svg>`,
        },
        chevronDown: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
        },
        minus: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
        },
        plus: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
        },
        list: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
        },
        grid: {
          path: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
        },
        search: {
          path: `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6665 8.95817C1.6665 12.979 4.93734 16.2498 8.95817 16.2498C12.979 16.2498 16.2498 12.979 16.2498 8.95817C16.2498 4.93734 12.979 1.6665 8.95817 1.6665C4.93734 1.6665 1.6665 4.93734 1.6665 8.95817ZM3.74984 8.95817C3.74984 6.0863 6.0863 3.74984 8.95817 3.74984C11.83 3.74984 14.1665 6.0863 14.1665 8.95817C14.1665 11.83 11.83 14.1665 8.95817 14.1665C6.0863 14.1665 3.74984 11.83 3.74984 8.95817ZM15.5352 14.0623L18.0279 16.555C18.4352 16.9623 18.4352 17.6207 18.0279 18.0279C17.8248 18.2311 17.5581 18.3332 17.2914 18.3332C17.0248 18.3332 16.7581 18.2311 16.555 18.0279L14.0623 15.5352C14.6133 15.1071 15.1071 14.6134 15.5352 14.0623Z" fill="#DBD9D4"/>
            </svg>
          `,
        },
        filter: {
          path: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 4.25H22.75V6.25H1.25V4.25ZM4.25 11H19.75V13H4.25V11ZM16.75 17.75H7.25V19.75H16.75V17.75Z" fill="#215ED8"/>
            </svg>
          `,
        },
        closeIcon: {
          path: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.75 4.70118L19.0488 3L11.875 10.1738L4.70118 3L3 4.70118L10.1738 11.875L3 19.0488L4.70118 20.75L11.875 13.5762L19.0488 20.75L20.75 19.0488L13.5762 11.875L20.75 4.70118Z" fill="#215ED8"/>
            </svg>
          `,
        },
        cart: {
          path: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.55256 1H1V2.83333H2.94744L4.78078 16.5833H19.1682L20.3911 10.4688C21.4341 9.46785 22.0833 8.05975 22.0833 6.5C22.0833 3.46243 19.6209 1 16.5833 1C13.8581 1 11.5958 2.9821 11.1594 5.58333H5.16367L4.55256 1ZM11.1594 7.41667H5.40811L6.38589 14.75H17.6652L18.2677 11.7373C17.7369 11.9079 17.1709 12 16.5833 12C13.8581 12 11.5958 10.0179 11.1594 7.41667ZM6.5 19.3333C5.99374 19.3333 5.58333 19.7437 5.58333 20.25C5.58333 20.7563 5.99374 21.1667 6.5 21.1667C7.00626 21.1667 7.41667 20.7563 7.41667 20.25C7.41667 19.7437 7.00626 19.3333 6.5 19.3333ZM3.75 20.25C3.75 18.7312 4.98122 17.5 6.5 17.5C8.01878 17.5 9.25 18.7312 9.25 20.25C9.25 21.7688 8.01878 23 6.5 23C4.98122 23 3.75 21.7688 3.75 20.25ZM17.5 19.3333C16.9937 19.3333 16.5833 19.7437 16.5833 20.25C16.5833 20.7563 16.9937 21.1667 17.5 21.1667C18.0063 21.1667 18.4167 20.7563 18.4167 20.25C18.4167 19.7437 18.0063 19.3333 17.5 19.3333ZM14.75 20.25C14.75 18.7312 15.9812 17.5 17.5 17.5C19.0188 17.5 20.25 18.7312 20.25 20.25C20.25 21.7688 19.0188 23 17.5 23C15.9812 23 14.75 21.7688 14.75 20.25ZM12.9167 6.5C12.9167 4.47496 14.5583 2.83333 16.5833 2.83333C18.6084 2.83333 20.25 4.47496 20.25 6.5C20.25 8.52504 18.6084 10.1667 16.5833 10.1667C14.5583 10.1667 12.9167 8.52504 12.9167 6.5ZM17.5 7.41667V9.25H15.6667V7.41667H13.8333V5.58333H15.6667V3.75H17.5V5.58333H19.3333V7.41667H17.5Z" fill="#F9F8F6"/>
            </svg>
          `,
        },
      },
    },
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://workbookfactory-api.herokuapp.com',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://workbookfactory-api.herokuapp.com',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-upload-drop-images'],
  },
  target: 'server',
}
