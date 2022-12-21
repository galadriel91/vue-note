import axios from 'axios';
import { setInstance } from './common/instance';
import type { Login, SignUp, UpdateItem, AddItem } from '@/store/types';

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

export const fetchNote = () => {
    return instance.get('/posts');
};

export const addNote = (post: AddItem) => {
    return instance.post('/posts', post);
};

export const fetchEditItem = (id: string) => {
    return instance.get(`/posts/${id}`);
};

export const updateEditItem = (info: UpdateItem) => {
    return instance.put(`/posts/${info._id}`, info);
};

export const removeItem = (id: string) => {
    return instance.delete(`/posts/${id}`);
};

export const getWeather = () => {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=6cf4638261aa257f2e15b223f0b61f32&units=metric`,
    );
};

export const locationWeather = (lat: number, lon: number) => {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6cf4638261aa257f2e15b223f0b61f32&units=metric`,
    );
};
