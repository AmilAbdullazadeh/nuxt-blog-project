export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    // mode: "spa",
    mode: "universal",
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "server",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            {rel: "stylesheet", href: "https://bootswatch.com/4/sketchy/bootstrap.min.css"}
        ],
        script: [
            // { src: "https://cdn.....jqeury" }
        ]
    },

    /*
     ** progress-bar
     */
    loading: {
        color: "blue",
        height: "3px",
        failedColor: "red"
    },
    // loading: false,

    // leadingIndicator: {
    //     name: 'circle',
    //     color: 'red'
    // },

    /*
     ** Global CSS
     */
    css: [
        // "~/assets/style/bootstrap.min.css"
        "@/assets/style/transition.css"
    ],

    // dev: false

    env: {
        baseURL: "https://nuxt-project-dallas.firebaseio.com/"
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                path: "/custom-reoute",
                component: resolve(__dirname, "pages/test.vue")
            })
        }
    },

    transition: {
        name: "layout",
        mode: "out-in"
    },


    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        "@/plugins/Components.js"
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
    ],

    // axios: {
    //     // proxyHeaders: false
    // },

    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
};
