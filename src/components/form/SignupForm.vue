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
        <div class="btnWrap">
            <span>이미 계정이 있으신가요?</span>
            <RouterLink to="/login" class="newBtn">로그인</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const email = ref('');
        const password = ref('');
        const nickname = ref('');
        const onSubmitForm = () => {
            console.log(1);
        };
        return {
            email,
            password,
            nickname,
            onSubmitForm,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/SignupForm';
</style>
