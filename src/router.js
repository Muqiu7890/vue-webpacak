import AppHome from './components/home/AppHome.vue'
import List from './components/crud/List.vue'
import New from './components/crud/New.vue'
import Update from './components/crud/Update.vue'

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
           path: '/',
            component: AppHome
        },
        {
            path: '/crud',
            component: List
        },
        {
            path: '/crud/new',
            component: New
        },
        {
            path: '/crud/update',
            component: Update
        }

    ]
})