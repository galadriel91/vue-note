import { defineStore } from 'pinia';
import {
    fetchNote,
    addNote,
    fetchEditItem,
    updateEditItem,
    removeItem,
} from '@/api';
import type { AddItem, PostItem, UpdateItem } from './types';

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
        async ADD_NOTE(note: AddItem) {
            const { data } = await addNote(note);
            console.log(data);
        },
        async FETCH_EDITNOTE(id: string) {
            const { data } = await fetchEditItem(id);
            this.edit = data;
        },
        async UPDATE_EDITNOTE(info: UpdateItem) {
            const { data } = await updateEditItem(info);
            console.log(data);
        },
        async REMOVE_NOTE(id: string) {
            const { data } = await removeItem(id);
            console.log(data);
        },
    },
});
