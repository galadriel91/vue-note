import { defineStore } from 'pinia';
import { fetchNote, addNote } from '@/api';
import type { PostItem } from './types';

export const usePost = defineStore('items', {
    state: () => ({
        posts: [] as PostItem[],
    }),
    actions: {
        async FETCH_NOTE() {
            const { data } = await fetchNote();
            this.posts = data;
        },
        async ADD_NOTE(note: PostItem) {
            const { data } = await addNote(note);
            console.log(data);
        },
    },
});
