import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure: false,
})
export class ReducePipe<T> implements PipeTransform {
  transform(value: T[], callbackFn: any, initialValue: T): unknown {
    console.log('pipe');
    return value.reduce(callbackFn, initialValue);
  }
}
