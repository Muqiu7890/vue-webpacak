<template>
        <div>
        <AppHeader></AppHeader>
                <div>
                        <AppAside></AppAside>
                        <router-view></router-view>
                </div>
        </div>
</template>

<script>
        import AppHeader from './components/common/AppHeader.vue';
        import AppAside from './components/common/AppAside.vue';
    export default {
        // name: 'App',
        components: {
            AppHeader,
            AppAside,
        }
    }
    // 任何一个组件都必须导出一个默认对象
</script>

<style scoped>

        /*本地样式  若无 全局样式*/
</style>