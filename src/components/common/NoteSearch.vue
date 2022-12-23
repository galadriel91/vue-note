<template>
    <div>
        <button
            class="material-symbols-outlined homeBtn"
            @click="onClickMain"
            v-if="isHome"
        >
            home
        </button>
        <form @submit.prevent="onSubmitForm">
            <input
                :class="{ isSearch: isHome }"
                type="text"
                placeholder="검색 키워드를 입력해 주세요"
                v-model="searchValue"
            />
            <button type="submit" class="material-symbols-outlined">
                search
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const searchValue = ref('');

        const onSubmitForm = () => {
            if (searchValue.value.length) {
                router.push(`/search/${searchValue.value}`);
                searchValue.value = '';
            } else {
                alert('검색어를 입력해 주세요');
            }
        };

        const onClickMain = () => {
            router.push('/');
        };

        const isHome = computed(() => {
            return route.name === 'search';
        });

        return {
            searchValue,
            onSubmitForm,
            onClickMain,
            isHome,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteSearch';
</style>
