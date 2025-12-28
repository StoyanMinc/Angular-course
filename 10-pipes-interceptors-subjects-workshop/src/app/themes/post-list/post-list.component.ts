import { Component, OnInit } from '@angular/core';

import { Post } from 'src/types/post';
import { ApiService } from '../../api.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    posts: Post[] = [];
    isLoading: boolean = true;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getPosts(5).subscribe({
            next: (posts) => {
                this.posts = posts;
                this.isLoading = false;
            },
            error: (error) => {
                console.error(error);
                this.isLoading = false;
            }
        });
    }
}
