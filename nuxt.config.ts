// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  modules: [
    'nuxt-headlessui'
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: 'Headless'
  },
  //tailwind config
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'src="https://myawesome-lib.js">' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
})
