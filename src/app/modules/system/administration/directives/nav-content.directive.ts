import { Directive, ViewContainerRef } from '@angular/core';

@Directive({selector: '[kl-nav-content]'})
export class NavContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
