<template>
    <div class="container">
        <NoteHeader v-if="isHeader" />
        <RouterView :key="$route.path" />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
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

        return { isHeader };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
