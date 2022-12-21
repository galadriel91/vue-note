<template>
    <div class="container">
        <NoteHeader v-if="isHeader" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteLoading,
        NoteHeader,
    },
    setup() {
        const route = useRoute();
        const isHeader = computed(() => {
            return route.meta.header;
        });

        const setScreenSize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        onMounted(() => {
            setScreenSize();
            window.addEventListener('resize', () => setScreenSize());
        });

        return { isHeader };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
