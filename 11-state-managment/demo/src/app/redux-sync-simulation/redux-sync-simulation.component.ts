import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-redux-sync-simulation',
    templateUrl: './redux-sync-simulation.component.html',
    styleUrls: ['./redux-sync-simulation.component.css']
})
export class ReduxSyncSimulationComponent implements OnInit {

    ngOnInit(): void {
        this.demoFn();
    }

    demoFn() {
        //* Redux -> pattern
        //   - State -> Single source of truth
        //   - Actions -> modifies the state

        //* How we do update the state?
        //   - we never touch it directly!
        //   - we dispatch an Action

        //* Reduce -> capture all actions that are dispatched
        //simple example
        // const reducer = (acc: number, curr: number) => acc + curr;
        // const eventsCollection = [10, 20, 30, 40, 50];
        // const initialState = 0;
        // const result = eventsCollection.reduce(reducer, initialState);
        // console.log({ result });

        //complex example

        interface AppState {
            msg: string;
            person: object;
            isAuth: boolean;
        }
        // default state
        const initialState: AppState = {
            msg: '',
            person: {},
            isAuth: false,
        };

        //ACTIONS
        const EVENT_1 = 'EVENT1';
        const EVENT_2 = 'EVENT2';
        const EVENT_3 = 'EVENT3';

        //REDUCER
        const reducer = (state: AppState, action: any) => {
            switch (action.type) {
                case EVENT_1:
                    return { ...state, msg: action.value };
                case EVENT_2:
                    return { ...state, person: action.value };
                case EVENT_3:
                    return { ...state, isAuth: action.value };
                default:
                    return state;
            }
        };

        // Events collection -> with dispaching values
        const eventsCollection = [
            { type: EVENT_1, value: 'Hello' },
            { type: EVENT_2, value: { name: 'John', age: 30, city: 'New York' } },
            { type: EVENT_3, value: true },
        ];

        const result = eventsCollection.reduce(reducer, initialState);
        // console.log({ result });
        // inforce us to uni-directional data flow (from parent to child)
        // simple flat objects
    }
    


}
