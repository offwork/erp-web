import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kl-layout-footer',
    template: `
      <footer class="app-footer">
        <span class="text-left" [innerHtml]="footerLeft"></span>
        <span class="float-right" [innerHtml]="footerRight"></span>
      </footer>
    `
})

export class FooterComponent implements OnInit {

    public footerLeft   = '';
    public footerRight  = '';

    constructor() { }

    ngOnInit() { }
}
