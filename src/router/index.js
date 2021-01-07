import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home.vue'),
    },
    {
        path: '/registrar',
        name: 'registrar',
        component: () =>
            import ('../views/Registrar.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/postagem',
        name: 'postagem',
        component: () =>
            import ('../views/Postagem.vue')
    },
    {
        path: '/posts',
        name: 'posts',
        component: () =>
            import ('../views/Posts.vue')
    },
    {
        path: '*',
        component: () =>
            import ('../views/404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    try {
        
        const user = firebase.auth().currentUser;
        if (to.name !== 'login' && !user) {
            console.log(user);
            next({name: 'login'})}

        else next()
    } catch (error) {
        console.error(error)
    }
})
export default router