<template>
    <div class="container">
        <NoteHeader v-if="isHeader" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
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
        const isLoading = ref([] as boolean[]);
        const route = useRoute();
        const common = useCommon();
        const { OFF_LOADING } = common;
        const { randomBg, status } = storeToRefs(common);

        const isHeader = computed(() => {
            return route.meta.header;
        });

        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        const backgroundImageInlineStyle = computed(() => {
            return `background-image: url("/assets/${status.value}bg${randomBg.value}.jpg")`;
        });

        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });

        const offLoading = () => {
            isLoading.value.push(true);
            if (isLoading.value.length === 3) {
                OFF_LOADING();
            }
        };

        return {
            isHeader,
            backgroundImageInlineStyle,
            offLoading,
            status,
            randomBg,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
