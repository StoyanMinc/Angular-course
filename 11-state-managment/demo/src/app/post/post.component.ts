import { Component } from '@angular/core';
import { Post, PostState } from './post.type';
import { Store } from '@ngrx/store';
import * as PostAction from './post.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {

    post$: Observable<Post>;
    msg: string = '';
    constructor(private store: Store<PostState>) {
        this.post$ = this.store.select('post')
    }

    like() {
        this.store.dispatch(new PostAction.Like());
    }

    dislike() {
        this.store.dispatch(new PostAction.Dislike());
    }

    reset() {
        this.store.dispatch(new PostAction.Reset());
    }

    edit() {
        this.store.dispatch(new PostAction.Edit(this.msg));
        this.msg = '';
    }
}