import { defineStore } from 'pinia';

export const useCommon = defineStore('common', {
    state: () => ({
        loading: false,
    }),
    actions: {
        ON_LOADING() {
            this.loading = true;
        },
        OFF_LOADING() {
            this.loading = false;
        },
    },
});
