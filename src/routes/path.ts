export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/',
        redirect: '/main',
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
