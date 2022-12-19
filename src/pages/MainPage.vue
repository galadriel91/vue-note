<template>
    <div>
        <ul>
            <NoteItem
                v-for="(post, index) in posts"
                :item="post"
                :key="index"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useLoading } from '@/composables/useLoading';
import NoteItem from '@/components/note/NoteItem.vue';

export default defineComponent({
    components: {
        NoteItem,
    },
    setup() {
        const post = usePost();
        const { posts } = storeToRefs(post);
        useLoading();
        return {
            posts,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
