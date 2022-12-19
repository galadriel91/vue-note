import { getPage, getDetailNote } from './guard';

export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/pages/NotPage.vue'),
        meta: { title: 'Error', search: false, header: false },
    },
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { title: 'Login', search: false, header: false },
    },
    {
        path: '/signup',
        component: () => import('@/pages/SignupPage.vue'),
        meta: { title: 'SignUp', search: false, header: false },
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/pages/MainPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Main', search: true, header: true },
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
        meta: { title: 'Create', search: false, header: true },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Edit', search: false, header: true },
    },
    {
        path: '/note/:id',
        name: 'note',
        component: () => import('@/pages/NotePage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Note', search: false, header: true },
    },
];
