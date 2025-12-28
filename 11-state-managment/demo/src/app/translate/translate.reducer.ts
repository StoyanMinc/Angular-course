import { Action } from '@ngrx/store';

const defaultMessage = 'Hello';
export function translateReducer(state = defaultMessage, action: Action) {
    console.log({ action, state });
    switch (action.type) {
        case 'BG':
            return state = 'Здравейте';
        case 'EN':
            return state = 'Hello';
        case 'IT':
            return state = 'Ciao';
        default:
            return state;
    }
}