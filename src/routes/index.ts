import { nextTick } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import path from './path';

export const router = createRouter({
    history: createWebHistory(),
    routes: path,
});

router.afterEach(to => {
    nextTick(() => {
        document.title = `${to.meta.title} | Simple Note`;
    });
});
