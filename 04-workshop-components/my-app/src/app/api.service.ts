import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/types/theme';
import { Post } from 'src/types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl;
  getThemes() {
    let url = `${this.apiUrl}/themes`;
    return this.http.get<Theme[]>(url);
  }

  getPosts(limit?: number) {
    let url = `${this.apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url);
  }
}
