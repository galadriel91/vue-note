<template>
    <div class="container" :style="backgroundImageInlineStyle">
        <NoteHeader v-if="isHeader" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
    },
    setup() {
        const route = useRoute();
        const common = useCommon();
        const { randomBg } = storeToRefs(common);
        const isHeader = computed(() => {
            return route.meta.header;
        });

        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        const backgroundImageInlineStyle = computed(() => {
            return `background-image: url("./src/assets/images/bg${randomBg.value}.jpg")`;
        });
        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });

        return { isHeader, backgroundImageInlineStyle };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
