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
                <span>{{ DATE }}</span>
                <span v-if="isUpdate">최근 수정</span>
            </div>
            <div class="btnWrap">
                <button
                    class="material-symbols-outlined"
                    @click="onClickEditPage"
                >
                    edit_note
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickRemove"
                >
                    delete_forever
                </button>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue';
import type { PostItem } from '@/store/types';
import { useDate } from '@/composables/useDate';
import { usePost } from '@/store/postStore';
import { useRouter } from 'vue-router';
import { useCommon } from '@/store/commonStore';

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
        const common = useCommon();
        const { REMOVE_NOTE, FETCH_NOTE } = post;
        const { ON_LOADING, OFF_LOADING } = common;
        const DATE = useDate(props.item);
        const isUpdate = computed(() => {
            return props.item.createdAt !== props.item.updatedAt;
        });
        const onClickItemPage = () => {
            router.push(`/note/${props.item._id}`);
        };
        const onClickEditPage = () => {
            router.push(`/edit/${props.item._id}`);
        };
        const onClickRemove = async () => {
            const deleteAllow = confirm('노트를 삭제 하시겠습니까?');
            if (deleteAllow) {
                ON_LOADING();
                await REMOVE_NOTE(props.item._id);
                await FETCH_NOTE();
                OFF_LOADING();
            } else {
                return;
            }
        };

        return {
            DATE,
            onClickItemPage,
            onClickRemove,
            onClickEditPage,
            isUpdate,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/note/NoteItem';
</style>
