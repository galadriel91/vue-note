<template>
    <NoteSearch />
    <NoteWeather />
    <ul>
        <NoteItem v-for="(post, index) in posts" :item="post" :key="index" />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import NoteItem from '@/components/note/NoteItem.vue';
import NoteWeather from '@/components/common/NoteWeather.vue';
import NoteSearch from '@/components/common/NoteSearch.vue';

export default defineComponent({
    components: {
        NoteItem,
        NoteWeather,
        NoteSearch,
    },
    setup() {
        const post = usePost();
        const { posts } = storeToRefs(post);
        return {
            posts,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
