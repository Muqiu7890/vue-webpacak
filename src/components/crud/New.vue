<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 class="page-header">添加学生</h1>
        <form @submit.prevent="add">
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
    import axios from 'axios'
    export default {
        // name: "New.vue"
        data () {
            return {
               formData: {
                   name: '',
                   age: ''
               }
            }
        },
        methods: {
            add () {
                //注册表单提交事件及处理函数 配置表单验证 取表单数据 提交表单，发起请求，添加学生
                //添加成功 跳转到列表页（编程式导航）
                //console.log(this.formData.name,this.formData.age)
                axios.post('http://127.0.0.1:3000/list',this.formData)
                    .then(res => {
                        //console.log(res)
                        this.$router.push('/crud')
                    })
            }
        }

    }
</script>

<style scoped>

</style>