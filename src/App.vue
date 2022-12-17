<template>
    <div>
        <!-- <NoteHeader v-if="isHeader" /> -->
        <div class="pageWrap">
            <RouterView :key="$route.path" />
        </div>
        <NoteFooter />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import NoteFooter from './components/common/NoteFooter.vue';
// import NoteHeader from './components/common/NoteHeader.vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteFooter,
        NoteLoading,
        // NoteHeader,
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
