<template>
    <div class="container">
        <ul>
            <NoteItem />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoteItem from '@/components/note/NoteItem.vue';

export default defineComponent({
    components: {
        NoteItem,
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
