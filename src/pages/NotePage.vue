<template>
    <NotePost :item="edit" />
</template>

<script lang="ts">
import NotePost from '../components/post/NotePost.vue';
import { useLoading } from '@/composables/useLoading';
import { usePost } from '@/store/postStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        NotePost,
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
