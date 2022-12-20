<template>
    <div>
        <form @submit.prevent="onSubmitForm">
            <input
                type="text"
                placeholder="검색 키워드"
                v-model="searchValue"
            />
            <button type="submit" class="material-symbols-outlined">
                search
            </button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const searchValue = ref('');

        const onSubmitForm = () => {
            if (searchValue.value.length) {
                router.push(`/search/${searchValue.value}`);
                searchValue.value = '';
            } else {
                alert('검색어를 입력해 주세요');
            }
        };

        return {
            searchValue,
            onSubmitForm,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteSearch';
</style>
