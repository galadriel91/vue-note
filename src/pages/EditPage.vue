<template>
    <div>
        <EditForm :item="edit" />
    </div>
</template>

<script lang="ts">
import EditForm from '../components/form/EditForm.vue';
import { useLoading } from '@/composables/useLoading';
import { usePost } from '@/store/postStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        EditForm,
    },
    setup() {
        const post = usePost();
        const { edit } = storeToRefs(post);
        useLoading();

        return {
            edit,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/pages/EditPage.scss';
</style>
