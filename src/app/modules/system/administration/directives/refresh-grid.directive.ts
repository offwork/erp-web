import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({selector: '[refreshGrid]'})
export class RefreshGridDirective {
  @HostListener('document:click', ['$event.target'])
  handleClick($event) {
    setTimeout(() => { this.clickOutside.emit($event); }, 300);
  }

  @Output()
  public clickOutside = new EventEmitter<MouseEvent>();
  constructor(private elementRef: ElementRef) {}
}
