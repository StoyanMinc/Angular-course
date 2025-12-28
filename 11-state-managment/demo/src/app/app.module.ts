import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReduxSyncSimulationComponent } from './redux-sync-simulation/redux-sync-simulation.component';
import { TranslateComponent } from './translate/translate.component';
import { StoreModule } from '@ngrx/store';
import { translateReducer } from './translate/translate.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostComponent } from './post/post.component';
import { postReducer } from './post/post.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ReduxSyncSimulationComponent,
    TranslateComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      message: translateReducer,
      post: postReducer as any,
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// let Person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// Person.name = 'Nick'; //* wrong way to update the object
// Person = {...Person, name: 'Nick'}; //* correct way to update the object

//ACTION -> BTN CLICK
//ACTION -> USER_AUTH
// ACTION -> DATA_FETCHED
// RESULT -> BETTER DEBUGGING / TRACE
