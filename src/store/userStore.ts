import { defineStore } from 'pinia';
import { fetchSignUp, fetchLogin } from '@/api/index';
import { useCommon } from './commonStore';
import type { SignUp, Login } from './types';
import {
    getAuthFromCookie,
    getUserFromCookie,
    saveAuthToCookie,
    saveUserToCookie,
} from '@/utils/cookie';

export const useUser = defineStore('user', {
    state: () => ({
        user: getUserFromCookie() || {},
        token: getAuthFromCookie() || '',
        isError: '',
    }),
    actions: {
        async FETCH_SIGNUP(info: SignUp) {
            const common = useCommon();
            const { ON_LOADING, OFF_LOADING } = common;
            try {
                ON_LOADING();
                await fetchSignUp(info);
                this.FETCH_LOGIN({
                    username: info.username,
                    password: info.password,
                });
            } catch (err: any) {
                OFF_LOADING();
                if (err.response) {
                    if (err.response.status === 409) {
                        this.isError = '이미 존재하는 이메일 입니다.';
                    } else {
                        this.isError =
                            '서버에 문제가 있어 회원가입하지 못했습니다.';
                    }
                } else {
                    this.isError =
                        '서버에 문제가 있어 회원가입하지 못했습니다.';
                }
            }
        },
        async FETCH_LOGIN(info: Login) {
            const common = useCommon();
            const { ON_LOADING, OFF_LOADING } = common;
            try {
                ON_LOADING();
                const { data } = await fetchLogin(info);
                this.token = data.token;
                this.user = data.user.nickname;
                saveAuthToCookie(data.token);
                saveUserToCookie(data.user.nickname);
                this.router.push('/main');
            } catch (err: any) {
                OFF_LOADING();
                if (err.response) {
                    if (
                        err.response.data ===
                        'Authentication failed. Wrong password.'
                    ) {
                        this.isError = '비밀번호를 다시 확인해주세요';
                    } else if (
                        err.response.data ===
                        'Authentication failed. User not found.'
                    ) {
                        this.isError = '아이디를 다시 한번 확인해주세요.';
                    }
                } else {
                    this.isError = '서버에 문제가 있어 로그인하지 못했습니다.';
                }
            }
        },
    },
});
