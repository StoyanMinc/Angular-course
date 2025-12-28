import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeRoutingModule } from './theme-routing.module';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { MainComponent } from './main/main.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AddThemeComponent,
        ThemeDetailsComponent,
        ThemeListComponent,
        MainComponent,
        PostListComponent,
        PostListItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ThemeRoutingModule,
        SharedModule,
        RouterModule
    ],
    exports: [
        MainComponent
    ]
})
export class ThemesModule { }
