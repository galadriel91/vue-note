<template>
    <div class="container">
        <!-- <EditForm :item="noteItem" /> -->
        EditPage
    </div>
</template>

<script lang="ts">
// import EditForm from '../components/form/EditForm.vue';
// import { useLoading } from '@/composables/useLoading';
// import { useItem } from '@/store/itemStore';
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
    components: {
        // EditForm,
    },
    setup() {
        // const item = useItem();
        // const { noteItem } = storeToRefs(item);
        // useLoading();

        return {
            // noteItem,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/pages/EditPage.scss';
</style>
