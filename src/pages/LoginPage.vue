<template>
    <div class="container">
        <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/form/LoginForm.vue';

export default defineComponent({
    components: {
        LoginForm,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/LoginPage';
</style>
