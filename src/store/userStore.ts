import { defineStore } from 'pinia';

export const useUser = defineStore('user', {
    state: () => ({
        currentUser: '',
    }),
    actions: {
        SET_USER(value: any) {
            this.currentUser = value;
        },
    },
});
