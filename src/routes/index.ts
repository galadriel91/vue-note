import { createWebHistory, createRouter } from 'vue-router';
import path from './path';

export const router = createRouter({
    history: createWebHistory(),
    routes: path,
});
