<template>
    <div class="inputWrap">
        <form @submit.prevent="onSubmitForm">
            <div class="formWrap">
                <div>
                    <label for="title">제목</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력해 주세요"
                        v-model="title"
                        ref="titleInput"
                    />
                </div>
                <div>
                    <label for="content">내용</label>
                    <textarea
                        id="content"
                        placeholder="내용을 입력해 주세요"
                        v-model="content"
                    ></textarea>
                </div>
            </div>
            <div class="infoWrap">
                <div class="dateWrap">
                    <span class="material-symbols-outlined">
                        calendar_today
                    </span>
                    <span>{{ time }}</span>
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
                    <button class="pcBtn" type="submit">생성</button>
                    <button
                        class="material-symbols-outlined moBtn"
                        type="submit"
                    >
                        check_box
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { usePost } from '@/store/postStore';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const post = usePost();
        const { ADD_NOTE } = post;

        const title = ref('');
        const titleInput = ref<HTMLInputElement>();
        const content = ref('');
        const today = new Date();
        const time = ref(today.toLocaleString());

        const onSubmitForm = async () => {
            if (title.value.length && content.value.length) {
                await ADD_NOTE({
                    title: title.value,
                    contents: content.value,
                });
                onClickMain();
            } else {
                alert('다시 한번 확인해 주세요');
            }
        };

        const onClickMain = () => {
            router.push('/');
        };

        const inputFocus = () => {
            const target = titleInput.value as HTMLInputElement;
            target.focus();
        };

        onMounted(() => {
            setInterval(() => {
                const today = new Date();
                time.value = today.toLocaleString();
            }, 1000);
            inputFocus();
        });

        return {
            title,
            titleInput,
            content,
            onSubmitForm,
            onClickMain,
            time,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/NoteForm';
</style>
