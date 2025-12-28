import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateType } from './translate.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent {
  msg$: Observable<string>;
  constructor(private store: Store<TranslateType>) {

    this.msg$ = this.store.select('message');
  }
  translate(lang: string) {
    this.store.dispatch({ type: lang });
  }


}
