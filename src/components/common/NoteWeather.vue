<template>
    <div class="weatherItem">
        <div class="timeWrap">
            <div class="weatherWrap">
                <div>
                    <img
                        :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
                        alt=""
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
                >
                    location_on
                </button>
                <button class="material-symbols-outlined" @click="onClickDark">
                    {{ isDark }}
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickLogout"
                >
                    logout
                </button>
                <button
                    class="material-symbols-outlined"
                    @click="onClickCreate"
                >
                    add
                </button>
            </div>
            <div class="quote">
                <p>오늘도 힘내자</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useTime } from '@/composables/useTime';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { deleteCookie } from '@/utils/cookie';
import { useUser } from '@/store/userStore';

export default defineComponent({
    setup() {
        const dark = ref(false);
        const router = useRouter();
        const post = usePost();
        const lasInfo = ref(0);
        const losInfo = ref(0);
        const userInfo = useUser();
        const timeInfo = useTime();
        const { SET_WEATHER, GET_WEATHER } = post;
        const { weather } = storeToRefs(post);
        const { token, user } = storeToRefs(userInfo);
        console.log(weather.value);

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
        };
        const isDark = computed(() => {
            return dark.value ? 'light_mode' : 'dark_mode';
        });

        const initDark = () => {
            if (localStorage.dark) {
                dark.value = JSON.parse(localStorage.dark);
                if (dark.value == true) {
                    document.body.classList.add('dark');
                }
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

        return {
            weather,
            timeInfo,
            onClickCreate,
            onClickLogout,
            isDark,
            onClickDark,
            onClickLocation,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
