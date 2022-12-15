import { defineStore } from 'pinia';
import { fetchSignUp } from '@/api/index';
import type { SignUp } from './types';

export const useUser = defineStore('user', {
    state: () => ({
        user: {},
    }),
    actions: {
        async FETCH_SIGNUP(info: SignUp) {
            const data = await fetchSignUp(info);
            console.log(data);
        },
    },
});
