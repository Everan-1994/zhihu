import vueRouter from 'vue-router';
import JWT from './helpers/jwt';
import Store from './store/modules/auth-user';

let routes = [
    {
        path: '/',
        name: 'index',
        component: require('./components/pages/Home')
    },
    {
        path: '/about',
        component: require('./components/pages/About')
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/posts/Post')
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: { requireGuest: true }
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: { requireGuest: true }
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Confirm')
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: { requireAuth: true }
    }
];

const router = new vueRouter({
    // mode: 'history',
    routes
});

router.beforeEach((to, form, next) => {
    if (to.meta.requireAuth) {
        if (Store.state.AuthUser.authenticated || JWT.getToken()) {
            return next();
        } else {
            return next({name: 'login'});
        }
    }
    if (to.meta.requireGuest) {
        if (Store.state.AuthUser.authenticated || JWT.getToken()) {
            return next({name: 'index'});
        } else {
            return next();
        }
    }
    return next();
});

export default router;