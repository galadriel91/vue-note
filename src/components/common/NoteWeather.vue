<template>
    <div class="weatherItem">
        <div class="timeWrap">
            <div class="weatherWrap">
                <div>
                    <img
                        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                        alt="날씨 이미지"
                        @load="offLoading"
                    />
                    <span>{{ Math.floor(weather.main.temp) }} °C</span>
                </div>
            </div>
            <div class="timeInfo">
                <div class="timeDetail">
                    <h3>
                        {{ timeInfo.time.value }}
                        <span>{{ timeInfo.am.value }}</span>
                    </h3>
                    <span>{{ timeInfo.day.value }}</span>
                </div>
                <div class="locationInfo">
                    <span>{{ weather.name }},</span>
                    <span>{{ weather.sys.country }}</span>
                </div>
            </div>
        </div>
        <div class="etcWrap">
            <div class="buttons">
                <button
                    class="material-symbols-outlined"
                    @click="onClickLocation"
                    title="위치 동기화"
                >
                    location_on
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickDark"
                    title="다크모드 전환"
                >
                    {{ isDark }}
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickLogout"
                    title="로그아웃 버튼"
                >
                    logout
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickCreate"
                    title="노트 생성 버튼"
                >
                    add
                </button>
            </div>
            <div class="quote">
                <p class="quoteUser">{{ user }}님</p>
                <p class="quoteWord">아자아자! 오늘도 힘내자</p>
            </div>
        </div>
    </div>
    <img
        class="loadingimg"
        :src="`/assets/daybg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
    <img
        class="loadingimg"
        :src="`/assets/nightbg${randomBg}.jpg`"
        alt="이미지"
        @load="offLoading"
    />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useTime } from '@/composables/useTime';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { deleteCookie } from '@/utils/cookie';
import { useUser } from '@/store/userStore';
import { useCommon } from '@/store/commonStore';

export default defineComponent({
    setup() {
        const isLoading = ref([] as boolean[]);
        const dark = ref(false);
        const router = useRouter();
        const post = usePost();
        const common = useCommon();
        const lasInfo = ref(0);
        const losInfo = ref(0);
        const userInfo = useUser();
        const timeInfo = useTime();

        const { SET_WEATHER, GET_WEATHER } = post;
        const { weather } = storeToRefs(post);
        const { token, user } = storeToRefs(userInfo);
        const { status, randomBg } = storeToRefs(common);
        const { SET_STATUS, OFF_LOADING } = common;

        const onClickLogout = () => {
            const answer = confirm('로그아웃 하시겠습니까?');
            if (answer) {
                token.value = '';
                user.value = {};
                deleteCookie('til_auth');
                deleteCookie('til_user');
                router.push('/login');
            } else {
                return;
            }
        };

        const onClickCreate = () => {
            router.push('/create');
        };

        const onClickDark = () => {
            dark.value = !dark.value;
            localStorage.setItem('dark', JSON.stringify(dark.value));
            document.body.classList.toggle('dark');
            if (status.value === 'day') {
                status.value = 'night';
            } else {
                status.value = 'day';
            }
            SET_STATUS(status.value);
        };

        const isDark = computed(() => {
            return status.value === 'night' ? 'light_mode' : 'dark_mode';
        });

        const initDark = () => {
            if (localStorage.dark) {
                dark.value = JSON.parse(localStorage.dark);
            }
        };
        initDark();

        const onClickLocation = () => {
            navigator.geolocation.getCurrentPosition(
                async pos => {
                    lasInfo.value = pos.coords.latitude;
                    losInfo.value = pos.coords.longitude;
                    await SET_WEATHER(lasInfo.value, losInfo.value);
                },
                async () => {
                    await GET_WEATHER();
                },
            );
        };

        const offLoading = () => {
            isLoading.value.push(true);
            if (isLoading.value.length === 3) {
                OFF_LOADING();
            }
        };

        return {
            weather,
            timeInfo,
            onClickCreate,
            onClickLogout,
            isDark,
            onClickDark,
            onClickLocation,
            user,
            offLoading,
            randomBg,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
