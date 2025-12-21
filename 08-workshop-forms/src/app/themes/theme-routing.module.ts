import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { routeGuard } from '../route.guard';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            { path: '', component: MainComponent, canActivate: [routeGuard] },
            { path: ':id/details', component: ThemeDetailsComponent, canActivate: [routeGuard] },
        ]
    },
    { path: 'add-theme', component: AddThemeComponent, canActivate: [routeGuard] },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ThemeRoutingModule { }
