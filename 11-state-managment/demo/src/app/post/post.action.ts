//TYPES

import { Action } from "@ngrx/store";

export const EDIT = '[POST] Edit';
export const LIKE = '[POST] Like';
export const DISLIKE = '[POST] Dislike';
export const RESET = '[POST] Reset';

//ACTIONS
export class Edit implements Action {
    readonly type = EDIT;

    constructor(public payload: string) { }
}

export class Like implements Action {
    readonly type = LIKE;
}

export class Dislike implements Action {
    readonly type = DISLIKE;
}

export class Reset implements Action {
    readonly type = RESET;
}

export type All = Edit | Like | Dislike | Reset;