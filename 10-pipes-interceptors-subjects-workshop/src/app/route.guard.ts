import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user/user.service';
import { map } from 'rxjs';

export const routeGuard: CanActivateFn = (route, state) => {
    const userService = inject(UserService);
    const router = inject(Router);

    return userService.isLoggedIn$.pipe(
        map(isLoggedIn => isLoggedIn
            ? true
            : router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: state.url } })
        )
    );
};


