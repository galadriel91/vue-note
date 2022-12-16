import { defineStore } from 'pinia';
import { fetchSignUp } from '@/api/index';
import type { SignUp } from './types';

export const useUser = defineStore('user', {
    state: () => ({
        user: {},
        isError: '',
    }),
    actions: {
        async FETCH_SIGNUP(info: SignUp) {
            try {
                const data = await fetchSignUp(info);
                console.log(data);
            } catch (err: any) {
                this.isError = '아이디가 존재하여 회원 가입이 실패했습니다.';
                console.log(err.response.status);
            }
        },
    },
});
