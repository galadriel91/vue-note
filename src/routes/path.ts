import { getPage, getDetailNote, getLoading } from './guard';

export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/pages/NotPage.vue'),
        meta: { title: 'Error', header: false },
    },
    {
        path: '/',
        redirect: () => {
            return '/login';
        },
    },
    {
        path: '/',
        redirect: () => {
            return '/intro';
        },
    },
    {
        path: '/intro',
        name: 'intro',
        component: () => import('@/pages/IntroPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Intro' },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/LoginPage.vue'),
        beforeEnter: getLoading(),
        meta: { title: 'Login', header: false, isLogin: true },
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('@/pages/SignupPage.vue'),
        beforeEnter: getLoading(),
        meta: { title: 'SignUp', header: false, isLogin: true },
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/pages/MainPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Main', search: true, header: false, auth: true },
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
        beforeEnter: getLoading(),
        meta: { title: 'Create', header: true, auth: true },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Edit', header: true, auth: true },
    },
    {
        path: '/note/:id',
        name: 'note',
        component: () => import('@/pages/NotePage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Note', header: true, auth: true },
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('@/pages/SearchPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Search', header: false, auth: true },
    },
];
