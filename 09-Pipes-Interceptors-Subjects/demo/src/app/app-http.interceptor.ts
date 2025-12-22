import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', API_URL),
      });
    }
    return next
      .handle(request)
      .pipe
      // catchError((err) => {
      //   console.error('Error in HTTP interceptor', err);
      //   return EMPTY;
      // })
      ();
  }
}

export const provideHttpInterceptor: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppHttpInterceptor,
  multi: true,
};
