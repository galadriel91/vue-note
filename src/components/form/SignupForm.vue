<template>
    <div class="formContainer">
        <img src="@/assets/images/gondor.png" alt="" />
        <form @submit.prevent="onSubmitForm">
            <div>
                <input
                    type="text"
                    placeholder="이메일을 입력해 주세요"
                    v-model="email"
                    ref="inputFocus"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="비밀번호를 입력해 주세요"
                    v-model="password"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="닉네임을 입력해 주세요"
                    v-model="nickname"
                />
            </div>
            <button type="submit">회원가입</button>
        </form>
        <button class="googleBtn" @click="onClickGoogle">
            <img src="@/assets/images/google.png" alt="" />Google 계정으로
            회원가입
        </button>
        <div class="btnWrap">
            <span>이미 계정이 있으신가요?</span>
            <RouterLink to="/login" class="newBtn">로그인</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { authService, firebaseInstance } from '@/utils/fb';
import { useUser } from '@/store/userStore';

export default defineComponent({
    setup() {
        const user = useUser();
        const { SET_USER } = user;
        const inputFocus = ref<HTMLInputElement | null>(null);
        const email = ref('');
        const password = ref('');
        const nickname = ref('');
        const onSubmitForm = async () => {
            try {
                await authService.createUserWithEmailAndPassword(
                    email.value,
                    password.value,
                );
                SET_USER(authService.currentUser);
            } catch (err) {
                console.error(err);
            }
        };
        const onClickGoogle = async () => {
            try {
                const provider = new firebaseInstance.auth.GoogleAuthProvider();
                const data = await authService.signInWithPopup(provider);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };
        onMounted(() => {
            inputFocus.value?.focus();
        });
        return {
            email,
            password,
            nickname,
            onSubmitForm,
            onClickGoogle,
            inputFocus,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/SignupForm';
</style>
