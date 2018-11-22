<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 class="page-header">编辑学生信息</h1>
        <form @submit.prevent="update">
            <div class="form-group">
                <label>姓名</label>
                <input type="text" class="form-control" v-model="formData.name">
            </div>
            <div class="form-group">
                <label>年龄</label>
                <input type="number" class="form-control" v-model="formData.age">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        // name: "Update.vue"
        data () {
            return {
                formData: {
                    name: '',
                    age: ''
                }
            }
        },
        async created () {
            //console.log(this.$route)
            const {id} = this.$route.query
            const {data} = await axios.get(`http://127.0.0.1:3000/list/${id}`)
            this.formData = data
        },
        methods: {
            async update () {
                //注册更新事件及处理函数 提交更新数据
                //修改完成 跳转到列表页（编程式导航）
                //console.log(this.formData.name,this.formData.age)
                // axios.patch(`http://127.0.0.1:3000/list/${this.formData.id}`,this.formData)
                //     .then(res => {
                //         //console.log(res)
                //         this.$router.push('/crud')
                //     })
                const res = await axios.patch(`http://127.0.0.1:3000/list/${this.formData.id}`,this.formData)
                this.$router.push('/crud')
            }
        }

    }
</script>

<style scoped>

</style>