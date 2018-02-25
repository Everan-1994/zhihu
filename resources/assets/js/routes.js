import vueRouter from 'vue-router';

let routes = [
    {
        path: '/',
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
        component: require('./components/register/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login')
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Confirm')
    }
];

export default new vueRouter({
    // mode: 'history',
    routes
});