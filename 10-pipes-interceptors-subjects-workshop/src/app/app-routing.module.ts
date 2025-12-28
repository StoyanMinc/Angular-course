import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ErrorComponent } from './core/error/error.component';
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    {path: 'error', component: ErrorComponent},
    { path: '**', component: NotFoundPageComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }