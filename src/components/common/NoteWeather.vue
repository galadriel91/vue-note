<template>
    <div class="weatherItem"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const post = usePost();
        const { weather } = storeToRefs(post);

        return {
            weather,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
