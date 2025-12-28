import { Injectable, Provider } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './core/error/error.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private errorService: ErrorService, private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let apiUrl = environment.apiUrl;
        if (request.url.startsWith('/api')) {
            request = request.clone({
                url: request.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }
        return next.handle(request).pipe(
            catchError((error: any) => {
                if (error.status === 401) {
                    this.router.navigate(['/auth/login']);
                } else {
                    this.errorService.setError(error);
                    this.router.navigate(['/error']);
                }
                return [error];
            })
        );
    }
}

export const apiInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
};