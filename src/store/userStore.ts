import { defineStore } from 'pinia';
import { fetchSignUp, fetchLogin } from '@/api/index';
import type { SignUp, Login } from './types';

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
                this.isError = '이메일이 존재하여 회원 가입이 실패했습니다';
                console.log(err.response.status);
            }
        },
        async FETCH_LOGIN(info: Login) {
            try {
                const data = await fetchLogin(info);
                console.log(data);
            } catch (err: any) {
                this.isError = '이메일이나 비밀번호를 다시 확인해주세요';
                console.log(err.response.status);
            }
        },
    },
});
