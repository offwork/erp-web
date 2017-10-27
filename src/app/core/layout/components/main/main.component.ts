import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kl-layout-main',
    template: `
      <main class="main">
        <ol class="breadcrumb">
          <kl-layout-breadcrumbs></kl-layout-breadcrumbs>
        </ol>
        <div class="container-fluid">
          <router-outlet></router-outlet>
        </div>
      </main>
    `,
    styles: [`
      .container-fluid {
        padding: 0 5px;
      }
      .breadcrumb {
        margin: 0;
        padding: 0.5rem 1.25rem;
      }
    `]
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
