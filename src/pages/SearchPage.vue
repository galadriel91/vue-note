<template>
    <NoteSearch />
    <NoteWeather />
    <ul v-if="posts.length">
        <NoteItem v-for="(post, index) in posts" :item="post" :key="index" />
    </ul>
    <div class="resultWrap" v-else>
        <h3>'{{ searchKeyword }}' <span>에 대한</span></h3>
        <p>검색 결과가 없습니다.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePost } from '@/store/postStore';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { useLoading } from '@/composables/useLoading';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import NoteSearch from '@/components/common/NoteSearch.vue';
import NoteWeather from '@/components/common/NoteWeather.vue';
import NoteItem from '@/components/note/NoteItem.vue';

export default defineComponent({
    components: {
        NoteSearch,
        NoteWeather,
        NoteItem,
    },
    setup() {
        const route = useRoute();
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

        const searchKeyword = computed(() => {
            return route.params.keyword;
        });

        return {
            posts,
            searchKeyword,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/SearchPage';
</style>
