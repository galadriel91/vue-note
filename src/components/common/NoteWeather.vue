<template>
    <div class="weatherItem">
        <div class="timeWrap">
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
            <div class="weatherWrap"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTime } from '@/composables/useTime';
import { usePost } from '@/store/postStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    setup() {
        const post = usePost();
        const timeInfo = useTime();
        const { weather } = storeToRefs(post);

        return {
            weather,
            timeInfo,
        };
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/components/common/NoteWeather.scss';
</style>
