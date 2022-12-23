<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        :placeholder="item.title"
                        v-model="title"
                        @focus="onClickFocus"
                        ref="titleInput"
                    />
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea
                        id="content"
                        :placeholder="item.contents"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="infoWrap">
                <div class="dateWrap">
                    <span v-if="isUpdate">수정 : </span>
                    <span v-else>생성 : </span>
                    <span>{{ DATE }}</span>
                </div>
                <div class="buttonWrap">
                    <button class="pcBtn" type="button" @click="onClickMain">
                        취소
                    </button>
                    <button
                        class="material-symbols-outlined moBtn"
                        type="button"
                        @click="onClickMain"
                    >
                        disabled_by_default
                    </button>
                    <button class="pcBtn" type="submit">수정</button>
                    <button
                        class="material-symbols-outlined moBtn"
                        type="submit"
                    >
                        check_box
                    </button>
                </div>
            </div>
        </form>
        <div v-if="isError" class="handleError">
            {{ isError }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType, computed } from 'vue';
import type { PostItem } from '@/store/types';
import { useDate } from '@/composables/useDate';
import { usePost } from '@/store/postStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<PostItem>,
            required: true,
        },
    },
    setup(props) {
        const post = usePost();
        const { UPDATE_EDITNOTE } = post;
        const { isError } = storeToRefs(post);
        const router = useRouter();
        const title = ref('');
        const content = ref('');
        const titleInput = ref<HTMLInputElement>();
        const DATE = useDate(props.item);
        const onClickMain = () => {
            router.go(-1);
        };

        const isUpdate = computed(() => {
            return props.item.createdAt !== props.item.updatedAt;
        });

        const inputFocus = () => {
            const target = titleInput.value as HTMLInputElement;
            target.focus();
        };

        const onSubmitForm = async () => {
            if (title.value.length && content.value.length) {
                await UPDATE_EDITNOTE({
                    _id: props.item._id,
                    title: title.value,
                    contents: content.value,
                });
                if (!isError.value) {
                    onClickMain();
                }
            } else {
                alert('다시 한번 확인해 주세요');
                inputFocus();
            }
        };

        onMounted(() => {
            inputFocus();
        });

        const onClickFocus = () => {
            if (isError) {
                isError.value = '';
            }
        };

        return {
            title,
            content,
            titleInput,
            onClickMain,
            onSubmitForm,
            DATE,
            isUpdate,
            isError,
            onClickFocus,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteEdit';
</style>
