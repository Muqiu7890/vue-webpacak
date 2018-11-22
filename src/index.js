import Vue from 'vue'
import App from './App.vue'
import './style.css'
import router from './router.js'

new Vue({
    el: '#main',
    template: '<App/>',
    router,
    components: {App}
})



//默认只转语法 不转API 若要转换 安装babel-polyfill 配置到入口节点 兼容到低版本浏览器



