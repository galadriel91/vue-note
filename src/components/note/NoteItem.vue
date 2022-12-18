<template>
    <li class="noteItem">
        <div class="contentWrap" @click="onClickItemPage">
            <h3 class="contentWrapTitle">{{ item.title }}</h3>
            <div class="contentWrapContent">
                <p>
                    {{ item.contents }}
                </p>
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
import type { PostItem } from '@/store/types';
// import type { NoteItems } from '@/store/types';
// import { useDate } from '@/composables/useDate';
import { usePost } from '@/store/postStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<PostItem>,
            required: true,
        },
    },
    setup(props) {
        const router = useRouter();
        const post = usePost();
        const { REMOVE_NOTE } = post;
        // const DATE = useDate(props.item);
        const onClickItemPage = () => {
            // router.push(`/note/${props.item.index}`);
        };
        const onClickEditPage = () => {
            router.push(`/edit/${props.item._id}`);
        };
        const onClickRemove = () => {
            REMOVE_NOTE(props.item._id);
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
