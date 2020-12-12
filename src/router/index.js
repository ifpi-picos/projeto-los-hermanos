import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/registrar',
        name: 'registrar',
        component: () =>
            import ('../views/Registrar.vue'),

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

/*router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!user) {
                console.log('Não logado')
                next('login')
            }
        }
    })
    next()
})
*/
export default router