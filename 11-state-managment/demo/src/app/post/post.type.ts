export interface PostState {
    post: Post;
}

export interface Post {
    text?: string;
    likes?: number;
}