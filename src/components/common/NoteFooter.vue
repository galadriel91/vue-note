<template>
    <div>
        <div class="wave wave-bg">&nbsp;</div>
        <footer>
            <div class="footerWrap">
                <h2>© {{ YEAR }} LEE MOON SEOB</h2>
                <a href="https://github.com/galadriel91" target="_blank">
                    <img
                        src="@/assets/images/github.png"
                        alt="깃허브 로고 아이콘"
                    />
                </a>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef } from 'vue';

export default defineComponent({
    setup() {
        const YEAR: ComputedRef<number> = computed(() => {
            return new Date().getFullYear();
        });
        return { YEAR };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteFooter';
</style>
