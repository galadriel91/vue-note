<template>
    <CreateForm />
</template>

<script lang="ts">
import CreateForm from '../components/form/CreateForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        CreateForm,
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/EditPage.scss';
</style>
