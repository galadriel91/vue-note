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
import { usePost } from '@/store/postStore';

export default defineComponent({
    components: {
        NoteItem,
    },
    setup() {
        const post = usePost();
        const { FETCH_NOTE } = post;
        FETCH_NOTE();
        return {};
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/MainPage';
</style>
