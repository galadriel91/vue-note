import { createApp, markRaw } from 'vue';
import { router } from '@/routes/index';
import { createPinia } from 'pinia';
import type { Router } from 'vue-router';

declare module 'pinia' {
    export interface PiniaCustomProperties {
        router: Router;
    }
}

import App from './App.vue';
const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

createApp(App).use(router).use(pinia).mount('#app');
