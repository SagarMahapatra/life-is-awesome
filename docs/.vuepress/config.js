module.exports = {
    title: "Share your light",
    description: "",
    base: '/',
    dest: 'pages',
    theme: require.resolve("../../"),
    themeConfig: {
        summary: true,
        nav: [{
                text: "Home",
                path: "/"
            },
            {
                text: "Food",
                path: "/food/",
                tags: ['bake', 'lunch', 'breakfast', 'dinner', 'odiya']

            },
            {
                text: "Blog",
                path: "/blog/",
                tags: ['lifestyle']

            },

        ],
        logo: "https://photos.sagarmahapatra.com/img/s/v-10/p3888105665-3.jpg",
        baseUrl: "https://photos.sagarmahapatra.com/img/s/v-10/",
        sitemap: true, // enables sitemap plugin
        hostname: "https://sagarmahapatra1.gitlab.io/life-is-awesome/", // required for sitemap
        disqus: "", // if you want to incorporate Disqus for comments replace this value else just get rid of it
        googleAnalytics: "", // Google Analytics tracking ID
        footer: {
            contact: [{
                    type: "instagram",
                    link: "#"
                },
                {
                    type: "linkedin",
                    link: "#"
                },
                {
                    type: "twitter",
                    link: "#"
                }
            ],
            copyright: [{
                    text: "Privacy Policy",
                    link: "https://policies.google.com/privacy?hl=en-US"
                },
                {
                    text: "MIT Licensed | Copyright © 2018-present Vue.js",
                    link: ""
                }
            ]
        }
    }
};