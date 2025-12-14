
// const promise = new Promise((resolve, reject) => { resolve('Hello'); })
//   .then((result) => { console.log(result); })
//   .then()
//   .then()
//   .catch((error) => {
//     console.log(error);
//   });

import { interval, map } from "rxjs";

// Promise.resolve(200)
//   .then((result) => result * 2)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Promise.reject(new Error('Error'))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const observable = new Observable<number>((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.next(4);
//   subscriber.next(5);
//   subscriber.complete();
// });

// observable.subscribe((result) => {
//   console.log('from observable: ', result);
// });


//* Custom interval
// const interval = (interval: number) => {
//   const observable = new Observable<number>((subscriber) => {
//     console.log('from observable');
//     let counter = 1;

//     setInterval(() => {
//       subscriber.next(counter++);
//     }, interval);

//     //clear interval on destroy
//     return () => clearInterval(interval);
//   });

//   return observable;
// };


const stream$ = interval(1000)
  .pipe(map((result: number) => result * 10));

setTimeout(() => {
  stream$.subscribe((result: number) => {
    console.log('from interval: ', result);
  });
}, 3000);