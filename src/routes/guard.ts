import { usePost } from '@/store/postStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const handleGeoSucces = async (position: any) => {
    const post = usePost();
    const { SET_WEATHER } = post;
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    await SET_WEATHER(latitude, longitude);
};

const handleGeoError = async () => {
    const post = usePost();
    const { GET_WEATHER } = post;
    await GET_WEATHER();
};

const getWeatherInfo = () => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
    );
};

export const getPage = () => async () => {
    const common = useCommon();
    const post = usePost();
    const { ON_LOADING } = common;
    const { FETCH_NOTE } = post;
    ON_LOADING();
    await FETCH_NOTE();
    try {
        const info = await getWeatherInfo();
        await handleGeoSucces(info);
    } catch {
        await handleGeoError();
    }
    return;
};

export const getDetailNote =
    () => async (to: RouteLocationNormalizedLoaded) => {
        const common = useCommon();
        const post = usePost();
        const { ON_LOADING } = common;
        const { FETCH_EDITNOTE } = post;
        ON_LOADING();
        await FETCH_EDITNOTE(to.params.id as string);
    };
