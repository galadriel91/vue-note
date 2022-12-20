<template>
    <div class="weatherItem">
        <div class="timeWrap">
            <div class="timeInfo">
                <h3>
                    {{ whatTime }} <span>{{ isAm }}</span>
                </h3>
                <span>{{ whatDay }}</span>
                <div class="locationInfo">
                    <span>{{ weather.name }},</span>
                    <span>{{ weather.sys.country }}</span>
                </div>
            </div>
            <div class="weatherWrap"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from 'vue';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const post = usePost();
        const { weather } = storeToRefs(post);
        const today = ref(new Date());

        const whatTime = computed(() => {
            const hours =
                today.value.getHours() % 12 ? today.value.getHours() % 12 : 12;
            const minutes =
                today.value.getMinutes() < 10
                    ? '0' + today.value.getMinutes()
                    : today.value.getMinutes();
            return `${hours}:${minutes}`;
        });

        const isAm = computed(() => {
            const ampm = today.value.getHours() >= 12 ? 'PM' : 'AM';
            return ampm;
        });

        const whatDay = computed(() => {
            const date = new Date();
            const daysArray = ['일', '월', '화', '수', '목', '금', '토'];
            const year = date.getFullYear();
            const month =
                date.getMonth() + 1 < 10
                    ? `0${date.getMonth() + 1}`
                    : date.getMonth() + 1;
            const day =
                date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const days = daysArray[date.getDay()];
            return `${year}-${month}-${day} (${days})`;
        });

        onMounted(() => {
            setInterval(() => {
                today.value = new Date();
            }, 1000);
        });

        return {
            weather,
            whatDay,
            whatTime,
            isAm,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
