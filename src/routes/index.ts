import { nextTick } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { useUser } from '@/store/userStore';
import { storeToRefs } from 'pinia';
import path from './path';

export const router = createRouter({
    history: createWebHistory(),
    routes: path,
});

router.beforeEach(to => {
    const user = useUser();
    const { token } = storeToRefs(user);
    if (to.meta.auth && !token.value) {
        console.log('로그인이 필요합니다');
        return '/login';
    }
    if (to.meta.isLogin && token.value) {
        return '/main';
    }
    nextTick(() => {
        document.title = `${to.meta.title} | Simple Note`;
    });
});
