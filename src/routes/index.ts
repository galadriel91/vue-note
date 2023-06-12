import { nextTick } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { useUser } from '@/store/userStore';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import path from './path';

export const router = createRouter({
    history: createWebHistory(),
    routes: path,
});

const initDark = () => {
    const common = useCommon();
    const { SET_STATUS } = common;
    if (localStorage.dark) {
        const dark = JSON.parse(localStorage.dark);
        if (dark) {
            SET_STATUS('night');
            document.body.classList.add('dark');
        } else {
            SET_STATUS('day');
        }
    }
};

router.beforeEach(to => {
    const user = useUser();
    const { token } = storeToRefs(user);
    initDark();
    if (to.meta.auth && !token.value) {
        return '/login';
    }
    if (to.meta.isLogin && token.value) {
        return '/main';
    }
    nextTick(() => {
        document.title = `${to.meta.title} | Simple Note`;
    });
});
