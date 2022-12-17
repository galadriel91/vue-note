<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickItemPage">
            <!-- <h3 class="contentWrapTitle">{{ item.title }}</h3> -->
            <h3 class="contentWrapTitle">노트 아이템 예시 입니다</h3>
            <div class="contentWrapContent">
                <!-- <p>
                    {{ item.content }}
                </p> -->
                <p>월드컵 우승은 아마도 프랑스가 할것 같습니다</p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <div class="dateWrap">
                <!-- <span>{{ DATE }}</span> -->
                <span>2022.12.14</span>
                <!-- <span v-if="item.update">최근 수정</span> -->
            </div>
            <div class="btnWrap">
                <button class="xi-pen-o" @click="onClickEditPage"></button>
                <button
                    class="xi-minus-square-o"
                    @click="onClickRemove"
                ></button>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
// import type { NoteItems } from '@/store/types';
// import { useDate } from '@/composables/useDate';
// import { useItem } from '@/store/itemStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        // const item = useItem();
        // const { REMOVE_NOTE } = item;
        // const DATE = useDate(props.item);
        const onClickItemPage = () => {
            // router.push(`/note/${props.item.index}`);
        };
        const onClickEditPage = () => {
            // router.push(`/edit/${props.item.index}`);
        };
        const onClickRemove = () => {
            // REMOVE_NOTE(props.item.id);
        };

        return {
            // DATE,
            onClickItemPage,
            onClickRemove,
            onClickEditPage,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
