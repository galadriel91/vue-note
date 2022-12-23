<template>
    <div class="container">
        <LoginForm />
    </div>
    <img
        class="loadingimg"
        :src="`/assets/daybg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
    <img
        class="loadingimg"
        :src="`/assets/nightbg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
    <img
        class="loadingimg"
        src="../assets/images/note.png"
        alt="이미지"
        @load="offLoading"
    />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import LoginForm from '../components/form/LoginForm.vue';

export default defineComponent({
    components: {
        LoginForm,
    },
    setup() {
        const isLoading = ref([] as boolean[]);
        const common = useCommon();

        const { OFF_LOADING } = common;
        const { randomBg } = storeToRefs(common);
        const offLoading = () => {
            isLoading.value.push(true);
            if (isLoading.value.length === 3) {
                OFF_LOADING();
            }
        };
        return {
            offLoading,
            randomBg,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/LoginPage';
</style>
