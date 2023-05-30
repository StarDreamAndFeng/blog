---
sidebar: false
---

<div class="box" v-for="item1 in link" :key="item1.id">
    <h3>{{ item1.catalog }}</h3>
    <div class="wrapper">
        <div class="card" v-for="item2 in item1.subLink" :key="item1.id + '-' + item2.id" :title="item2.title" @click="goto(item2.url)">
            <img :src="item2.imgUrl" alt="图"/>
            <p class="title">{{ item2.title }}</p>
        </div>
    </div>
</div>

<div>
    <Card></Card>
</div>

<script>
    import axios from "axios"

    export default {
        data() {
            return {                
                link: []
            }
        },
        async mounted() {
            const { data : res } =  await axios.get("http://localhost:8123/link/all")
            if (res.code !== 200) return console.log("获取资源失败,url: /link/all");
            this.link = res.data;
        },
        methods: {
            // 跳转到各个网页链接
            goto(url) {
                window.open(url)
            }
        }
    }
</script>

<style lang="scss">

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* 盒子 */
    .box {
        width: 100%;
        font-size: 15px;
    }

    /* 网格布局 */
    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
        grid-gap: 14px;
        grid-auto-rows: 40px;

        /* 卡片 */
        .card {
            overflow: hidden;
            display: flex;
            align-items: center;
            background-color: #f2f2f2;
            padding: 5px 10px;
            border-radius: 3px;         

            img {
                width: 20px;
                margin-right: 10px;
            }

             /* 链接介绍部分 */
            .title {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;              
            }
        }

        .card:hover {
            cursor: pointer;
            box-shadow: rgba(23, 230, 138, 0.8) 0px 0px 14px -4px;
            transform: translateY(-2px);
        }
    }    
</style>

