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
        isError: '',
        currentPage: 1,
        showLimits: 2,
        showNum: 0,
    }),
    actions: {
        async FETCH_NOTE() {
            try {
                const { data } = await fetchNote();
                const sortItem = data.posts.sort(
                    (a: PostItem, b: PostItem) =>
                        Number(new Date(b.updatedAt)) -
                        Number(new Date(a.updatedAt)),
                );
                this.posts = sortItem;
            } catch (err: any) {
                this.router.push('/404');
            }
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
            try {
                await addNote(note);
            } catch (err: any) {
                if (err.response) {
                    if (err.response.status === 400) {
                        this.isError = '같은 이름의 노트가 이미 존재합니다';
                    } else {
                        this.isError =
                            '서버에 문제가 있어 노트를 생성하지 못했습니다';
                    }
                } else {
                    this.isError =
                        '서버에 문제가 있어 노트를 생성하지 못했습니다';
                }
            }
        },
        async FETCH_EDITNOTE(id: string) {
            const { data } = await fetchEditItem(id);
            this.edit = data;
        },
        async UPDATE_EDITNOTE(info: UpdateItem) {
            try {
                await updateEditItem(info);
            } catch (err: any) {
                if (err.response) {
                    if (err.response.status === 400) {
                        this.isError = '같은 이름의 노트가 이미 존재합니다';
                    } else {
                        this.isError =
                            '서버에 문제가 있어 노트를 생성하지 못했습니다';
                    }
                } else {
                    this.isError =
                        '서버에 문제가 있어 노트를 생성하지 못했습니다';
                }
            }
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
