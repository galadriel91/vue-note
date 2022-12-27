<template>
    <CreateForm />
</template>

<script lang="ts">
import CreateForm from '../components/form/CreateForm.vue';
import { useLoading } from '@/composables/useLoading';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        CreateForm,
    },
    setup() {
        useLoading();
        return {};
    },
});
</script>
