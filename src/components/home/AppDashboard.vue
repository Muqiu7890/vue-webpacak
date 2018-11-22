<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 class="page-header">Dashboard</h1>

        <div class="row placeholders">
            <div class="col-xs-6 col-sm-3 placeholder"  v-for="item in items">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                <h4>{{ item.text }}</h4>
                <span class="text-muted">Something else</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        // name: "AppDashboard.vue"
        data () {
            return {
                items: [
                    {text: '白'},
                    {text: '龙'},
                    {text: '冠'},
                    {text: '天'}
                ]

            }
        }
    }
</script>

<style scoped>

</style>