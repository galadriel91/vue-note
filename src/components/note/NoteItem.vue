<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickItemPage">
            <!-- <div class="contentWrapTitle">
                <h3 class="contentWrapTitle">{{ item.title }}</h3>
            </div> -->
            <div class="contentWrapTitle">
                <h3>안녕하세요 라치오 입니다.</h3>
            </div>
            <div class="contentWrapContent">
                <!-- <p>
                    {{ item.content }}
                </p> -->
                <p>
                    <!-- {{ item.content }} -->
                    연기를 왜이렇게 존나 못하냐?
                </p>
            </div>
        </div>
        <div class="contentInfoWrap">
            <div class="dateWrap">
                <!-- <span>{{ DATE }}</span> -->
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
// import { useRouter } from 'vue-router';

export default defineComponent({
    // props: {
    //     item: {
    //         type: Object as PropType<NoteItems>,
    //         required: true,
    //     },
    // },
    setup(props) {
        // const router = useRouter();
        // const item = useItem();
        // const { REMOVE_NOTE } = item;
        // const DATE = useDate(props.item);
        const onClickItemPage = () => {
            console.log(1);
            // router.push(`/note/${props.item.index}`);
        };
        const onClickEditPage = () => {
            console.log(1);
            // router.push(`/edit/${props.item.index}`);
        };
        const onClickRemove = () => {
            console.log(1);
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
