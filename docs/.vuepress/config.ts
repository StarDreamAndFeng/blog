import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

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
                text: "正文",
                link: "/default"
            },
            {
                text: "安装教程",
                link: "/install"
            },
            {
                text: "资源导航",
                link: "/link"
            }
        ],
        // 禁用贡献者名字
        contributors: false,
        // 最近更新
        lastUpdatedText: "最近更新"
    })
}