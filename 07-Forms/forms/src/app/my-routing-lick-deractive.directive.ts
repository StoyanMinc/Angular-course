import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRoutingLickDeractive]'
})
export class MyRoutingLickDeractiveDirective {

  @Input() appMyRoutingLickDeractive: string = ''

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen(this.el.nativeElement, 'click', this.onClick.bind(this));
  }

  onClick() {
    console.log(this.appMyRoutingLickDeractive);
    this.router.navigate([this.appMyRoutingLickDeractive]);
  }

}
