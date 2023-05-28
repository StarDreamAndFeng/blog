import { defaultTheme } from 'vuepress'

export default {
    port: 3127,
    theme: defaultTheme({
        // logo
        logo: "/images/记事本.png",
        // 导航栏设置
        navbar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "默认分类",
                link: "/default"
            },
            {
                text: "安装",
                link: "/install"
            },
            {
                text: "大佬博客",
                link: "/other-blog"
            }
        ],
        // 禁用贡献者名字
        contributors: false,
        // 最近更新
        lastUpdatedText: "最近更新"
    }),
}