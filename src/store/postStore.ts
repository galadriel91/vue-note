import { defineStore } from 'pinia';

export const usePost = defineStore('items', {
    state: () => ({
        posts: [],
    }),
    actions: {},
});
