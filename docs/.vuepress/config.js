module.exports = {

    title: "Sanatana",
    description: "This is a description",
    theme: require.resolve("../../"),
    dest: "docs/.vuepress/dist",
    themeConfig: {
        summary: true,
        nav: [{
                text: "Home",
                link: "/",
                icon: "el-icon-house"
            },
            {
                text: "Projects",
                link: "/projects/",
            }
        ],
        sitemap: true, // enables sitemap plugin
        hostname: "https://ahmadmostafa.com/", // required for sitemap
        disqus: "", // if you want to incorporate Disqus for comments replace this value else just get rid of it
        googleAnalytics: "", // Google Analytics tracking ID
        footer: {
            contact: [{
                    type: "github",
                    link: "https://github.com/z3by"
                },
                {
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
            ]
        }
    }
}