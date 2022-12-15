<template>
    <div>
        <div>
            <RouterView :key="$route.path" />
        </div>
        <NoteFooter />
        <NoteLoading />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteFooter from './components/common/NoteFooter.vue';
import NoteLoading from './components/common/NoteLoading.vue';

export default defineComponent({
    components: {
        NoteFooter,
        NoteLoading,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
