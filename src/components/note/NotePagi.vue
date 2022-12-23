<template>
    <ul v-if="totalItems > 1">
        <li>
            <button
                class="material-symbols-outlined"
                :class="{ active: currentPage === 1 }"
                :disabled="currentPage === 1"
                @click="onClickPageMinus"
            >
                keyboard_arrow_left
            </button>
        </li>
        <li>
            <input
                type="text"
                v-model="pageNum"
                @focusout="onMovePage"
                @keydown.enter="onMovePage"
                ref="pageInput"
            />
            <span>/</span>
            <span>{{ totalItems }}</span>
        </li>
        <li>
            <button
                class="material-symbols-outlined"
                :class="{ active: currentPage === totalItems }"
                :disabled="currentPage === totalItems"
                @click="onClickPagePlus"
            >
                keyboard_arrow_right
            </button>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const post = usePost();
        const pageInput = ref<HTMLInputElement>();
        const pageNum = ref(1);
        const { posts, currentPage, showLimits, showNum } = storeToRefs(post);
        const totalItems = computed(() => {
            return Math.ceil(posts.value.length / 2);
        });

        const inputBlur = () => {
            const target = pageInput.value as HTMLInputElement;
            target.blur();
        };

        const onClickPagePlus = () => {
            currentPage.value = currentPage.value + 1;
            showLimits.value = showLimits.value + 2;
            showNum.value = showNum.value + 2;
            pageNum.value = currentPage.value;
        };

        const onClickPageMinus = () => {
            currentPage.value = currentPage.value - 1;
            showLimits.value = showLimits.value - 2;
            showNum.value = showNum.value - 2;
            pageNum.value = currentPage.value;
        };

        const setInit = () => {
            currentPage.value = 1;
            showLimits.value = 2;
            showNum.value = 0;
        };

        const onMovePage = () => {
            if (pageNum.value > 0 && pageNum.value < totalItems.value) {
                setInit();
                currentPage.value = pageNum.value;
                showLimits.value = showLimits.value * pageNum.value;
                showNum.value = showLimits.value - 2;
                inputBlur();
            } else {
                alert('다시 입력해 주세요');
                pageNum.value = 1;
            }
        };

        return {
            totalItems,
            currentPage,
            onClickPagePlus,
            onClickPageMinus,
            pageNum,
            pageInput,
            onMovePage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NotePagi';
</style>
