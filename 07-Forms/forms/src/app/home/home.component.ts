import { Component } from '@angular/core';
import { MyStructureDirectiveDirective } from '../my-structure-directive.directive';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    isHidden = true;

    toggle() {
        this.isHidden = !this.isHidden;
    }

    showDirectiveReference(directiveRef: MyStructureDirectiveDirective) {
        console.log(directiveRef);
    }

}
