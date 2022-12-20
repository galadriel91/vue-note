import { computed, ref } from 'vue';

export const useTime = () => {
    const dayInfo = ref(new Date());
    const whatTime = computed(() => {
        const hours =
            dayInfo.value.getHours() % 12 ? dayInfo.value.getHours() % 12 : 12;
        const minutes =
            dayInfo.value.getMinutes() < 10
                ? '0' + dayInfo.value.getMinutes()
                : dayInfo.value.getMinutes();
        return `${hours}:${minutes}`;
    });

    const isAm = computed(() => {
        const ampm = dayInfo.value.getHours() >= 12 ? 'PM' : 'AM';
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
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const days = daysArray[date.getDay()];
        return `${year}-${month}-${day} (${days})`;
    });

    setInterval(() => {
        dayInfo.value = new Date();
    }, 1000);

    return {
        day: whatDay,
        time: whatTime,
        am: isAm,
    };
};
