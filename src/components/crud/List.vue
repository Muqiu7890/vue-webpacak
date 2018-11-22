<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-link class="btn btn-success" to="/crud/new">添加学生</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="list in lists">
                    <td>{{ list.id }}</td>
                    <td>{{ list.name}}</td>
                    <td>{{ list.age }}</td>
                    <td>
                        <router-link :to="`/crud/update?id=${list.id}`">编辑</router-link>
                        <a @click.prevent="deleteById(list.id)">删除</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        // name: "List.vue"
        data () {
            return {
                lists: [
                    {
                        id: 1,
                        name: 'xiaohong',
                        age: 15
                    },
                    {
                        id: 2,
                        name: 'xiaozhang',
                        age: 17
                    }

                ]
            }
        },
        created () {
            this.loadList();
            //最早拿到data数据的钩子
        },
        methods: {
            //async默认返回 Promise 对象  通过then方法得到async的返回值
            async loadList () {
                // axios.get('http://127.0.0.1:3000/list').then((res) => {
                //     // console.log(res.data)
                //     this.lists = res.data
            // })
                const res = await axios.get('http://127.0.0.1:3000/list')
                this.lists = res.data
            },
            deleteById (id) {
                //注册删除事件处理函数 发起请求删除数据 根据响应结果处理
                //console.log(id)
                if(!window.confirm('确定删除？'))
                {
                    return
                }
                axios.delete(`http://127.0.0.1:3000/list/${id}`).then( res => {
                    this.loadList()
                })
            }
        }
    }
</script>

<style scoped>

</style>