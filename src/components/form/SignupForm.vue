<template>
    <div class="formContainer">
        <img
            src="@/assets/images/note.png"
            alt="노트 로고 이미지"
            @load="offLoading"
        />
        <form @submit.prevent="onSubmitForm">
            <div>
                <i class="material-symbols-outlined">mail</i>
                <input
                    type="text"
                    placeholder="이메일"
                    v-model="email"
                    :class="{ valid: isValid }"
                    @focus="onClickFocus"
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
            <div>
                <i class="material-symbols-outlined">person</i>
                <input
                    type="text"
                    placeholder="닉네임"
                    v-model="nickname"
                    :maxlength="6"
                    :class="{ valid: nickname.length }"
                />
            </div>
            <button type="submit">회원가입</button>
        </form>
        <div class="handleError" v-if="isError">{{ isError }}</div>
        <div class="btnWrap">
            <span>이미 계정이 있으신가요?</span>
            <RouterLink to="/login" class="newBtn">로그인</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, type ComputedRef } from 'vue';
import { useUser } from '@/store/userStore';
import { storeToRefs } from 'pinia';
import { useValid } from '@/composables/useValid';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    setup() {
        const common = useCommon();
        const user = useUser();
        const { isError } = storeToRefs(user);
        const { FETCH_SIGNUP } = user;
        const { OFF_LOADING } = common;
        const email = ref('');
        const password = ref('');
        const nickname = ref('');

        const isCheck = ref(true);
        const isValid: ComputedRef<boolean> = computed(() => {
            if (email.value === '') {
                return false;
            } else {
                return useValid(email.value);
            }
        });

        const onSubmitForm = () => {
            const valueArray = [email.value, password.value, nickname.value];
            valueArray.forEach(v => {
                if (v === '') {
                    isCheck.value = false;
                }
            });
            if (isCheck.value && isValid.value) {
                const info = {
                    username: email.value,
                    password: password.value,
                    nickname: nickname.value,
                };
                FETCH_SIGNUP(info);
                initForm();
            } else {
                alert('다시 한번 확인 해주세요');
            }
        };

        const initForm = () => {
            email.value = '';
            password.value = '';
            nickname.value = '';
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
            nickname,
            onSubmitForm,
            isValid,
            isError,
            onClickFocus,
            offLoading,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/form/SignupForm';
</style>
