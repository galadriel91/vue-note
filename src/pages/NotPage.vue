<template>
    <div class="container">
        <h1>404 Not Found</h1>
        <p>페이지를 찾을수 없습니다.</p>
        <span class="xi-arrow-left backBtn" @click="onClickMain"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const onClickMain = () => {
            router.push('/');
        };
        return {
            onClickMain,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/NotPage';
</style>
