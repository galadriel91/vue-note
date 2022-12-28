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
    <img
        class="loadingimg"
        :src="`/assets/daybg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
    <img
        class="loadingimg"
        :src="`/assets/nightbg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePost } from '@/store/postStore';
import { useCommon } from '@/store/commonStore';
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
        const isLoading = ref([] as boolean[]);
        const common = useCommon();
        const post = usePost();
        const { OFF_LOADING } = common;
        const { randomBg } = storeToRefs(common);
        const { posts, showLimits, showNum } = storeToRefs(post);

        const offLoading = () => {
            isLoading.value.push(true);
            if (isLoading.value.length === 2) {
                OFF_LOADING();
            }
        };

        return {
            posts,
            showNum,
            showLimits,
            offLoading,
            randomBg,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
