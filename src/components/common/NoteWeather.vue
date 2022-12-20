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
                <h3>
                    {{ timeInfo.time.value }}
                    <span>{{ timeInfo.am.value }}</span>
                </h3>
                <span>{{ timeInfo.day.value }}</span>
                <div class="locationInfo">
                    <span>{{ weather.name }},</span>
                    <span>{{ weather.sys.country }}</span>
                </div>
            </div>
        </div>
        <div class="etcWrap">
            <div class="buttons">
                <button class="material-symbols-outlined">location_on</button>
                <button class="material-symbols-outlined">dark_mode</button>
                <button class="material-symbols-outlined">logout</button>
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
import { defineComponent } from 'vue';
import { useTime } from '@/composables/useTime';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        const post = usePost();
        const timeInfo = useTime();
        const { weather } = storeToRefs(post);
        console.log(weather.value);

        const onClickCreate = () => {
            router.push('/create');
        };

        return {
            weather,
            timeInfo,
            onClickCreate,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
