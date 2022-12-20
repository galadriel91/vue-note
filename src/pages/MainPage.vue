<template>
    <NoteWeather />
    <ul>
        <NoteItem v-for="(post, index) in posts" :item="post" :key="index" />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useLoading } from '@/composables/useLoading';
import NoteItem from '@/components/note/NoteItem.vue';
import NoteWeather from '@/components/common/NoteWeather.vue';

export default defineComponent({
    components: {
        NoteItem,
        NoteWeather,
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
