<template>
    <div>
        <CreateForm />
    </div>
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
