import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {
  AsyncSubject,
  BehaviorSubject,
  map,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//* Observable
// const observable$ = new Observable((observer) => {
//   observer.next('1');
//   observer.next('2');
//   observer.next('3');

//   return () => {
//     console.log('Unsubscribed');
//   };
// });

// observable$.pipe(map((n: any) => Number(n) * 10)).subscribe((data) => {
//   console.log(data);
// });

//* Subjects
// const subject$$ = new Subject();

// subject$$.subscribe((data) => {
//   console.log('Subscriber A', data); // A
// });
// subject$$.next(100);

// subject$$.subscribe((data) => {
//   console.log('Subscriber B', data); // B
// });
// subject$$.next(200);

// subject$$.subscribe((data) => {
//   console.log('Subscriber C', data); // C
// });
// subject$$.next(300);

// setTimeout(() => {
//   subject$$.subscribe((data) => {
//     console.log('Subscriber D', data); // D
//   });
//   subject$$.next(400);
// }, 3000);

//* BehaviorSubject
// const behaviorSubject$$ = new BehaviorSubject(100);
// behaviorSubject$$.subscribe((data) => {
//   console.log('Subscriber 1', data); // A
// });
// behaviorSubject$$.next(200);
// behaviorSubject$$.subscribe((data) => {
//   console.log('Subscriber 2', data); // B
// });
// behaviorSubject$$.next(300);
// behaviorSubject$$.subscribe((data) => {
//   console.log('Subscriber 3', data); // C
// });
// behaviorSubject$$.next(400);

//* ReplaySubject
// const replaySubject$$ = new ReplaySubject(5); //* buffer size
// replaySubject$$.subscribe((data) => {
//   console.log('Subscriber 1', data); // A
// });

// for (let i = 1; i <= 20; i++) {
//   replaySubject$$.next(i);
// }

// setTimeout(() => {
//   replaySubject$$.subscribe((data) => {
//     console.log('Subscriber 2', data); // B
//   });
// }, 3000);

//* AsyncSubject
// const asyncSubject$$ = new AsyncSubject(); //* last value only after complete

// asyncSubject$$.subscribe((data) => {
//   console.log('Subscriber 1', data); // A
// });
// asyncSubject$$.next(1);
// asyncSubject$$.next(2);
// asyncSubject$$.next(3);

// asyncSubject$$.subscribe((data) => {
//   console.log('Subscriber 2', data); // B
// });
// asyncSubject$$.next(4);
// asyncSubject$$.next(5);
// asyncSubject$$.complete();
