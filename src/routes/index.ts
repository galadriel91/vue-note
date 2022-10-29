import { createWebHistory, createRouter } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/pages/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/pages/SignupPage.vue'),
        },
    ],
});
