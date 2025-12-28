import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ThemesModule } from './themes/themes.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { apiInterceptorProvider } from './api.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundPageComponent,
        AuthenticateComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        ThemesModule,
        AppRoutingModule,
    ],
    providers: [apiInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
