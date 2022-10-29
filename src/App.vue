<template>
    <div>
        <NoteFooter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteFooter from './components/common/NoteFooter.vue';

export default defineComponent({
    components: {
        NoteFooter,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
