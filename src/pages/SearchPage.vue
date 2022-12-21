<template>
    <NoteSearch />
    <NoteWeather />
    <ul>
        <NoteItem v-for="(post, index) in posts" :item="post" :key="index" />
    </ul>
</template>

<script lang="ts">
import NoteSearch from '@/components/common/NoteSearch.vue';
import NoteWeather from '@/components/common/NoteWeather.vue';
import NoteItem from '@/components/note/NoteItem.vue';
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { useLoading } from '@/composables/useLoading';
import { onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
    components: {
        NoteSearch,
        NoteWeather,
        NoteItem,
    },
    setup() {
        const post = usePost();
        const common = useCommon();
        const { ON_LOADING } = common;
        const { SEARCH_NOTE } = post;
        const { posts } = storeToRefs(post);
        useLoading();

        onBeforeRouteUpdate(async to => {
            ON_LOADING();
            await SEARCH_NOTE(to.params.keyword as string);
        });
        return {
            posts,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
