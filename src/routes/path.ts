import { getPage, getDetailNote } from './guard';
import { useUser } from '@/store/userStore';
import { storeToRefs } from 'pinia';

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
        redirect: () => {
            // const user = useUser();
            // const { token } = storeToRefs(user);
            // if (token.value) {
            //     return '/main';
            // } else {
            //     return '/login';
            // }
            return '/login';
        },
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { title: 'Login', search: false, header: false, isLogin: true },
    },
    {
        path: '/signup',
        component: () => import('@/pages/SignupPage.vue'),
        meta: { title: 'SignUp', search: false, header: false, isLogin: true },
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
        meta: { title: 'Create', search: false, header: true, auth: true },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Edit', search: false, header: true, auth: true },
    },
    {
        path: '/note/:id',
        name: 'note',
        component: () => import('@/pages/NotePage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Note', search: false, header: true, auth: true },
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('@/pages/SearchPage.vue'),
        beforeEnter: getPage(),
        meta: { title: 'Search', search: false, header: false, auth: true },
    },
];
