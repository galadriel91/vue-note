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
            <div class="infoWrap" :class="{ noUpdate: true }">
                <!-- <div class="dateWrap" v-if="item.update">
                    <span>최근 수정일 : </span>
                    <span>{{ DATE }}</span>
                </div> -->
                <div class="buttonWrap">
                    <button type="button" @click="onClickMain">취소</button>
                    <button type="submit">수정</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from 'vue';
import type { PostItem } from '@/store/types';
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
        const post = usePost();
        // const { UPDATE_NOTE } = post;
        const router = useRouter();
        const title = ref('');
        const content = ref('');
        const titleInput = ref<HTMLInputElement>();
        // const DATE = useDate(props.item);
        const onClickMain = () => {
            router.go(-1);
        };

        const inputFocus = () => {
            const target = titleInput.value as HTMLInputElement;
            target.focus();
        };

        const onSubmitForm = async () => {
            // if (title.value.length && content.value.length) {
            //     await UPDATE_NOTE({
            //         id: props.item.id,
            //         index: props.item.index,
            //         title: title.value,
            //         content: content.value,
            //         date: new Date(),
            //         update: true,
            //     });
            //     onClickMain();
            // } else {
            //     alert('다시 한번 확인해 주세요');
            //     inputFocus();
            // }
            console.log(1);
        };

        onMounted(() => {
            inputFocus();
        });

        return {
            title,
            content,
            titleInput,
            onClickMain,
            onSubmitForm,
            // DATE,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteEdit';
</style>
