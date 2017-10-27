import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kl-layout-header-domains',
  template: `
    <li class="nav-item dropdown" dropdown (onToggle)="toggled($event)">
      <a class="nav-link dropdown-toggle" dropdownToggle (click)="false">
        <span *ngIf="!activeDomain" class="alert alert-danger">
          Please select a domain
        </span>
        <span *ngIf="activeDomain">
          {{activeDomain.name}}
        </span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" *dropdownMenu aria-labelledby="simple-dropdown">
        <a *ngFor="let domain of domains" (click)="switchDomain($event, domain)"
           [ngClass]="{ 'active': domain === activeDomain }" class="dropdown-item" href="" >
          <i class="icon-globe"></i>
          {{domain.name}}
        </a>
      </div>
    </li>
  `,
})

export class HeaderDomainsComponent implements OnInit {

  public activeDomain: any;
  public domains: any;

  constructor() {}

  ngOnInit() {}

  switchDomain($event, domain) {
    $event.preventDefault();
  }

  toggled(event) {}
}
