<template>
    <div class="container">
        <SignupForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoading } from '@/composables/useLoading';
import SignupForm from '../components/form/SignupForm.vue';

export default defineComponent({
    components: {
        SignupForm,
    },
    setup() {
        useLoading();
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/SignupPage';
</style>
