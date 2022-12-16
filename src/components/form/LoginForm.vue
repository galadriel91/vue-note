<template>
    <div class="formContainer">
        <img src="@/assets/images/gondor.png" alt="" />
        <form @submit.prevent="onSubmitForm">
            <div>
                <input
                    type="text"
                    placeholder="이메일을 입력해 주세요"
                    v-model="email"
                    @focus="onClickFocus"
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
        <div class="handleError" v-if="isError">{{ isError }}</div>
        <div class="btnWrap">
            <span>계정이 없으신가요?</span>
            <RouterLink to="/signup" class="newBtn">가입하기</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, type ComputedRef } from 'vue';
import { useUser } from '@/store/userStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        // UserStore - 로그인 및 에러 관련 정보
        const user = useUser();
        const { isError } = storeToRefs(user);
        const { FETCH_LOGIN } = user;
        const email = ref('');
        const password = ref('');

        // Submit시 조건 정의
        const isCheck = ref(true);
        const isValid: ComputedRef<boolean> = computed(() => {
            if (email.value === '') {
                return false;
            } else {
                return checkValidateEmail(email.value);
            }
        });

        // 이메일 확인
        const checkValidateEmail = (email: string) => {
            const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        const onSubmitForm = () => {
            const valueArray = [email.value, password.value];
            valueArray.forEach(v => {
                if (v === '') {
                    isCheck.value = false;
                }
            });
            if (isCheck.value && isValid.value) {
                const info = {
                    username: email.value,
                    password: password.value,
                };
                FETCH_LOGIN(info);
                initForm();
            } else {
                alert('다시 한번 확인 해주세요');
            }
        };

        const initForm = () => {
            email.value = '';
            password.value = '';
        };

        const onClickFocus = () => {
            if (isError) {
                isError.value = '';
            }
        };

        return {
            email,
            password,
            onSubmitForm,
            isError,
            onClickFocus,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/LoginForm';
</style>
