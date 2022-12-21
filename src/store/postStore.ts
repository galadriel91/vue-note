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
            this.posts = data.posts;
        },
        async SEARCH_NOTE(keyword: string) {
            const { data } = await fetchNote();
            // console.log(data.posts);
            const search = data.posts.filter((v: any) => {
                if (v.title.includes(keyword) || v.contents.includes(keyword)) {
                    return true;
                } else {
                    return false;
                }
            });
            this.posts = search;
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
