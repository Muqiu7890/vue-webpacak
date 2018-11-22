<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <router-link tag="li" exact to="/"><a>学生管理</a></router-link> <!--严格匹配-->
                    <router-link tag="li" to="/crud"><a>crud</a></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // name: "AppAside.vue"
    }
</script>

<style scoped>

</style>