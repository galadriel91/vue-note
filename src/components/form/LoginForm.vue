<template>
    <div class="formContainer">
        <img src="@/assets/images/note.png" alt="노트 로고 이미지" />
        <form @submit.prevent="onSubmitForm">
            <div>
                <i class="material-symbols-outlined">mail</i>
                <input
                    type="text"
                    placeholder="이메일"
                    v-model="email"
                    @focus="onClickFocus"
                    :class="{ valid: isValid }"
                />
            </div>
            <div>
                <i class="material-symbols-outlined"> lock </i>
                <input
                    type="password"
                    placeholder="비밀번호"
                    v-model="password"
                    :class="{ valid: password.length >= 6 }"
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
import { useCommon } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import { useValid } from '@/composables/useValid';

export default defineComponent({
    setup() {
        // UserStore - 로그인 및 에러 관련 정보
        const user = useUser();
        const common = useCommon();
        const { isError } = storeToRefs(user);
        const { FETCH_LOGIN } = user;
        const { OFF_LOADING } = common;
        const email = ref('');
        const password = ref('');

        // Submit시 조건 정의
        const isCheck = ref(true);
        const isValid: ComputedRef<boolean> = computed(() => {
            if (email.value === '') {
                return false;
            } else {
                return useValid(email.value);
            }
        });

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

        const offLoading = () => {
            OFF_LOADING();
        };

        return {
            email,
            password,
            onSubmitForm,
            isError,
            isValid,
            onClickFocus,
            offLoading,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/LoginForm';
</style>
