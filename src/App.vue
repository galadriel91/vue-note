<template>
    <div>
        <RouterView />
        <NoteFooter />
    </div>
</template>

<script lang="ts">
import { authService } from '@/utils/fb';
import { defineComponent } from 'vue';
import { useUser } from '@/store/userStore';
import { storeToRefs } from 'pinia';
import NoteFooter from './components/common/NoteFooter.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        NoteFooter,
    },
    setup() {
        const router = useRouter();
        const user = useUser();
        const { currentUser } = storeToRefs(user);
        const { SET_USER } = user;
        authService.onAuthStateChanged(user => {
            SET_USER(user);
            if (currentUser.value) {
                router.push('/main');
            } else {
                router.push('/login');
            }
        });
        return {};
    },
});
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
