import { defineStore } from 'pinia';
import {
    fetchNote,
    addNote,
    fetchEditItem,
    updateEditItem,
    removeItem,
    getWeather,
    locationWeather,
} from '@/api';
import type { AddItem, PostItem, UpdateItem, WeatherItem } from './types';

export const usePost = defineStore('items', {
    state: () => ({
        posts: [] as PostItem[],
        edit: {} as PostItem,
        weather: {} as WeatherItem,
    }),
    actions: {
        async FETCH_NOTE() {
            const { data } = await fetchNote();
            const sortItem = data.posts.sort(
                (a: PostItem, b: PostItem) =>
                    Number(new Date(b.updatedAt)) -
                    Number(new Date(a.updatedAt)),
            );
            this.posts = sortItem;
        },
        async SEARCH_NOTE(keyword: string) {
            const { data } = await fetchNote();
            const search = data.posts.filter((v: PostItem) => {
                if (
                    v.title.includes(keyword) ||
                    v.contents.includes(keyword) ||
                    v.updatedAt.includes(keyword)
                ) {
                    return true;
                } else {
                    return false;
                }
            });
            const sortItem = search.sort(
                (a: PostItem, b: PostItem) =>
                    Number(new Date(b.updatedAt)) -
                    Number(new Date(a.updatedAt)),
            );
            this.posts = sortItem;
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
            await removeItem(id);
        },
        async GET_WEATHER() {
            const { data } = await getWeather();
            this.weather = data;
        },
        async SET_WEATHER(lat: number, los: number) {
            const { data } = await locationWeather(lat, los);
            this.weather = data;
        },
    },
});
