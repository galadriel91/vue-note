<template>
    <div class="container">
        <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import LoginForm from '../components/form/LoginForm.vue';

export default defineComponent({
    components: {
        LoginForm,
    },
    setup() {
        const common = useCommon();
        const { OFF_LOADING } = common;
        OFF_LOADING();
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/LoginPage';
</style>
