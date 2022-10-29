<template>
    <div class="formContainer">
        <img src="@/assets/images/gondor.png" alt="" />
        <form @submit.prevent="onSubmitForm">
            <div>
                <input
                    type="text"
                    placeholder="이메일을 입력해 주세요"
                    v-model="email"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    v-model="password"
                />
            </div>
            <button type="submit">로그인</button>
        </form>
        <button class="googleBtn" @click="onSocialClick">
            <img src="@/assets/images/google.png" alt="" />
            Google 계정으로 로그인
        </button>
        <div class="btnWrap">
            <span>계정이 없으신가요?</span>
            <RouterLink to="/signup" class="newBtn">가입하기</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { authService } from '@/utils/fb';
import { useUser } from '@/store/userStore';

export default defineComponent({
    setup() {
        const user = useUser();
        const { SET_USER } = user;
        const email = ref('');
        const password = ref('');
        const onSubmitForm = async () => {
            try {
                await authService.signInWithEmailAndPassword(
                    email.value,
                    password.value,
                );
                console.log(authService.currentUser);
                SET_USER(authService.currentUser);
            } catch (err) {
                console.error(err);
            }
        };
        const onSocialClick = () => {
            console.log(1);
        };
        return {
            email,
            password,
            onSocialClick,
            onSubmitForm,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/LoginForm';
</style>
