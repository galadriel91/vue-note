import axios from 'axios';
import type { Login, SignUp } from '@/store/types';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URI,
});

export const fetchSignUp = (info: SignUp) => {
    return instance.post('/signup', info);
};

export const fetchLogin = (info: Login) => {
    return instance.post('/login', info);
};
