<template>
    <header>
        <h1>{{ headerName }}</h1>
        <button
            class="material-symbols-outlined"
            @click="onClickCreate"
            v-show="!showBtns"
        >
            add
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useHeader } from '@/composables/useHeader';

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const headerName = ref(useHeader());

        const search = computed(() => {
            return route.name === 'search';
        });

        const showBtns = computed(() => {
            const name = route.name;
            return name === 'create';
        });

        const onClickCreate = () => {
            router.push('/create');
        };

        const onClickBefore = () => {
            router.go(-1);
        };

        return {
            search,
            headerName,
            showBtns,
            onClickCreate,
            onClickBefore,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
