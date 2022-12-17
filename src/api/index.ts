import axios from 'axios';
import { setInstance } from './common/instance';
import type { Login, SignUp } from '@/store/types';

const createInstance = () => {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_URI,
    });
    return setInstance(instance);
};

const instance = createInstance();

export const fetchSignUp = (info: SignUp) => {
    return instance.post('/signup', info);
};

export const fetchLogin = (info: Login) => {
    return instance.post('/login', info);
};
