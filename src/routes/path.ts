export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/pages/NotPage.vue'),
        meta: { title: 'Error Page', search: false, header: false },
    },
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { title: 'Login Page', search: false, header: false },
    },
    {
        path: '/signup',
        component: () => import('@/pages/SignupPage.vue'),
        meta: { title: 'Signup Page', search: false, header: false },
    },
];
