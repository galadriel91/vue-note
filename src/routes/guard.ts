import { usePost } from '@/store/postStore';
import { useCommon } from '@/store/commonStore';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const getPage = () => async (to: RouteLocationNormalizedLoaded) => {
    // const common = useCommon();
    const post = usePost();
    // if (keyword === undefined) {
    //     keyword = '';
    // }
    // const { ON_LOADING } = common;
    const { FETCH_NOTE } = post;
    // ON_LOADING();
    await FETCH_NOTE();
    return;
};

// export const getDetailNote =
//     () => async (to: RouteLocationNormalizedLoaded) => {
//         const common = useCommon();
//         const item = useItem();
//         const { ON_LOADING } = common;
//         const { GET_NOTEITEM } = item;
//         ON_LOADING();
//         await GET_NOTEITEM(parseInt(to.params.id as string));
//     };
