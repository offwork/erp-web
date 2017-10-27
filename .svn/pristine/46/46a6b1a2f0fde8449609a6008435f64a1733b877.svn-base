import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'kl-aside',
  templateUrl: './aside.component.html'
})

export class AsideComponent implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let nativeElement: HTMLElement = this.el.nativeElement;
    let parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
