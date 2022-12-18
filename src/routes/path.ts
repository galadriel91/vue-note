import { getPage } from './guard';

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
    {
        path: '/main',
        name: 'main',
        component: () => import('@/pages/MainPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Main Page', search: true, header: true },
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
        meta: { title: 'Create Page', search: false, header: true },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        // beforeEnter: getDetailNote(),
        meta: { title: 'Edit Page', search: false, header: true },
    },
];
