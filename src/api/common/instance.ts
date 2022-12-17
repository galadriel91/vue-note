import type { AxiosInstance } from 'axios';
import { storeToRefs } from 'pinia';
import { useUser } from '@/store/userStore';

export const setInstance = (instance: AxiosInstance) => {
    // Add a request interceptor
    instance.interceptors.request.use(
        function (config) {
            const user = useUser();
            const { token } = storeToRefs(user);
            // Do something before request is sent
            if (config.headers) {
                config.headers.Authorization = token.value;
            }
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );

    // Add a response interceptor
    instance.interceptors.response.use(
        function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            return Promise.reject(error);
        },
    );
    return instance;
};
