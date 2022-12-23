<template>
    <div class="loadingWrap" v-if="loading">
        <div class="loader"></div>
    </div>
</template>

<script lang="ts">
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const common = useCommon();
        const { loading } = storeToRefs(common);

        return {
            loading,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteLoading.scss';
</style>
