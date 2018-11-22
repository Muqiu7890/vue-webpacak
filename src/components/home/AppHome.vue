<template>
    <div>
        <AppDashboard></AppDashboard>
        <AppSection></AppSection>
    </div>
</template>

<script>
    import AppDashboard from './AppDashboard.vue'
    import AppSection from './AppSection.vue'
    export default {
        // name: "AppHome.vue",
        components: {
            AppDashboard,
            AppSection
        }
    }
</script>

<style scoped>

</style>