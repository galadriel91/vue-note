<template>
    <header>
        <div class="headerWrap">
            <h1><a href="#home">PORTFOLIO</a></h1>
            <div>
                <nav :class="{ showing: isActive }">
                    <ul id="menu">
                        <li data-menuanchor="home" @click="onClickRemove">
                            <a href="#home"><span>Create</span></a>
                        </li>
                        <li data-menuanchor="about" @click="onClickRemove">
                            <a href="#about"><span>Logout</span></a>
                        </li>
                    </ul>
                </nav>
                <button
                    :class="isDark"
                    @click="onClickDark"
                    class="dark"
                ></button>
                <a
                    href="javascript:void(0)"
                    class="wholeBtn"
                    @click="onToggleActive"
                >
                    <span :class="{ active: isActive }">&nbsp;</span>
                </a>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    setup() {
        const isActive = ref(false);
        const dark = ref(false);
        const onToggleActive = () => {
            isActive.value = !isActive.value;
        };
        const onClickRemove = () => {
            isActive.value = false;
        };
        const onClickDark = () => {
            dark.value = !dark.value;
            localStorage.setItem('dark', JSON.stringify(dark.value));
            document.body.classList.toggle('dark');
        };
        const isDark = computed(() => {
            return dark.value ? 'xi-sun' : 'xi-moon';
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

        return {
            isActive,
            onToggleActive,
            onClickRemove,
            onClickDark,
            isDark,
        };
    },
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/common/NoteHeader';
</style>
