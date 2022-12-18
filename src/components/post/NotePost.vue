<template>
    <div class="postWrap">
        <div class="postLeft">
            <div class="titleWrap">
                <h2>{{ item.title }}</h2>
            </div>
            <div class="contentWrap">
                <p>{{ item.contents }}</p>
                <div class="dateWrap">
                    <!-- <span>{{ DATE }}</span> -->
                    <!-- <span v-if="item.update">수정</span> -->
                    <!-- <span v-else>작성</span> -->
                </div>
            </div>
        </div>
        <div class="postRight">
            <button @click="onClickMain">이전</button>
            <div class="buttonWrap">
                <button @click="onClickEdit">수정</button>
                <button @click="onClickRemove">삭제</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
// import { useDate } from '@/composables/useDate';
import type { PostItem } from '@/store/types';
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
        const onClickMain = () => {
            router.go(-1);
        };
        const onClickEdit = () => {
            router.push(`/edit/${props.item._id}`);
        };
        const onClickRemove = () => {
            const result = confirm('노트를 삭제하시겠습니까?');
            if (result) {
                REMOVE_NOTE(props.item._id);
                onClickMain();
            }
        };
        return {
            // DATE,
            onClickMain,
            onClickEdit,
            onClickRemove,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/item/NotePost';
</style>
