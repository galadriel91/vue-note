<template>
    <div class="loadingWrap" v-if="loading" :style="backgroundImageInlineStyle">
        <div class="loader"></div>
    </div>
</template>

<script lang="ts">
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    setup() {
        const common = useCommon();
        const { loading, randomBg } = storeToRefs(common);

        const backgroundImageInlineStyle = computed(() => {
            return `background-image: url("./src/assets/images/bg${randomBg.value}.jpg")`;
        });

        return {
            loading,
            backgroundImageInlineStyle,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteLoading.scss';
</style>
