import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Theme } from 'src/types/theme';
import { Post } from 'src/types/post';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getThemes() {
        let url = '/api/themes';
        return this.http.get<Theme[]>(url);
    }

    getTheme(id: string) {
        return this.http.get<Theme>(`/api/themes/${id}`);
    }

    getPosts(limit?: number) {
        let url = '/api/posts';
        if (limit) {
            url += `?limit=${limit}`;
        }
        return this.http.get<Post[]>(url);
    }

    addTheme(themeName: string, postText: string) {
        return this.http.post<Theme>('/api/themes', { themeName, postText });
    }
}
