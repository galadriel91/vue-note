<template>
    <NoteSearch />
    <NoteWeather />
    <ul>
        <NoteItem
            v-for="(post, index) in posts.slice(showNum, showLimits)"
            :item="post"
            :key="index"
        />
    </ul>
    <NotePagi />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import NoteItem from '@/components/note/NoteItem.vue';
import NoteWeather from '@/components/common/NoteWeather.vue';
import NoteSearch from '@/components/common/NoteSearch.vue';
import NotePagi from '@/components/note/NotePagi.vue';

export default defineComponent({
    components: {
        NoteItem,
        NoteWeather,
        NoteSearch,
        NotePagi,
    },
    setup() {
        const post = usePost();
        const { posts, showLimits, showNum } = storeToRefs(post);
        return {
            posts,
            showNum,
            showLimits,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
