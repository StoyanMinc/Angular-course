import * as PostActions from './post.action';
import { Post, PostState } from './post.type';

export type Action = PostActions.All;

const defaultState: Post = {
    text: 'Default text',
    likes: 0,
};

function newState(oldState: Post, newState: Post) {
    return { ...oldState, ...newState };
}

//* Implement reducer. Default state is important to avoid null errors.
export function postReducer(state: Post = defaultState, action: Action) {
    switch (action.type) {
        case PostActions.EDIT:
            return newState(state, { text: action.payload });
        case PostActions.LIKE:
            return newState(state, { likes: state.likes ? state.likes + 1 : 1 });
        case PostActions.DISLIKE:
            return newState(state, { likes: state.likes ? state.likes - 1 : 0 });
        case PostActions.RESET:
            return defaultState;
        default:
            return state;
    }
}