<template>
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
import { getWeather } from '@/api';

export default defineComponent({
    components: {
        NoteItem,
    },
    setup() {
        const post = usePost();
        const { posts } = storeToRefs(post);
        useLoading();
        const weatherData = async () => {
            const { data } = await getWeather();
            console.log(data);
        };
        weatherData();
        return {
            posts,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
