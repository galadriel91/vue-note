import { defineStore } from 'pinia';

export const useCommon = defineStore('common', {
    state: () => ({
        status: '',
        loading: false,
        randomBg: new Date().getDay(),
    }),
    actions: {
        ON_LOADING() {
            this.loading = true;
        },
        OFF_LOADING() {
            this.loading = false;
        },
        SET_STATUS(keyword: string) {
            this.status = keyword;
        },
    },
});
