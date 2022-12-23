<template>
    <div class="container" :style="backgroundImageInlineStyle">
        <NoteHeader v-if="isHeader" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
    <img
        class="loadingimg"
        :src="`/assets/${status}bg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
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
        const { SET_STATUS, OFF_LOADING } = common;
        const { randomBg, status } = storeToRefs(common);

        const initDark = () => {
            if (localStorage.dark) {
                const dark = JSON.parse(localStorage.dark);
                if (dark) {
                    SET_STATUS('night');
                } else {
                    SET_STATUS('day');
                }
            }
        };
        initDark();

        const isHeader = computed(() => {
            return route.meta.header;
        });

        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        const backgroundImageInlineStyle = computed(() => {
            return `background-image: url("./assets/${status.value}bg${randomBg.value}.jpg")`;
        });

        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });

        const offLoading = () => {
            OFF_LOADING();
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
