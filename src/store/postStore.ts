import { defineStore } from 'pinia';
import { fetchNote, addNote, fetchEditItem } from '@/api';
import type { PostItem } from './types';

export const usePost = defineStore('items', {
    state: () => ({
        posts: [] as PostItem[],
        edit: {} as PostItem,
    }),
    actions: {
        async FETCH_NOTE() {
            const { data } = await fetchNote();
            this.posts = data.posts;
        },
        async ADD_NOTE(note: PostItem) {
            const { data } = await addNote(note);
            console.log(data);
        },
        async FETCH_EDITNOTE(id: string) {
            const { data } = await fetchEditItem(id);
            this.edit = data;
        },
    },
});
