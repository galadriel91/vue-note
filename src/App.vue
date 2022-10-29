<template>
    <div>
        <RouterView />
        <NoteFooter />
    </div>
</template>

<script lang="ts">
import { authService } from '@/utils/fb';
import { defineComponent, watchEffect } from 'vue';
import NoteFooter from './components/common/NoteFooter.vue';

export default defineComponent({
    components: {
        NoteFooter,
    },
    setup() {
        watchEffect(() => {
            authService.onAuthStateChanged(user => console.log(user));
        });
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
