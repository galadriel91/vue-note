import { useRoute } from 'vue-router';
import { computed } from 'vue';
export const useHeader = () => {
    const route = useRoute();
    const headerName = computed(() => {
        const name = route.name;
        if (name === 'main') {
            return 'Todo Note';
        } else if (name === 'create') {
            return 'Create Note';
        } else if (name === 'edit') {
            return 'Edit Note';
        } else if (name === 'note') {
            return 'Simple Note';
        } else {
            return 'Search Page';
        }
    });
    return headerName;
};
