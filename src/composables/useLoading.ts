import { onMounted } from 'vue';
import { useCommon } from '@/store/commonStore';

export const useLoading = () => {
    const common = useCommon();
    const { OFF_LOADING } = common;
    onMounted(() => {
        OFF_LOADING();
    });
};
