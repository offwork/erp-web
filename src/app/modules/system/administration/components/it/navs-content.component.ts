import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { UINavLink } from '../../../../../core/ui';

import { NavContentDirective } from '../../directives/nav-content.directive';
import { AddContent } from '../../add-content';
import { AddComponent } from '../../add.component';

@Component({
  selector: 'kl-add-navs-content',
  template: `
    <div class="animated fadeIn">
      <div class="email-app mb-4">
        <nav>
          <kl-ui-navs-vertical [navs]="navs" (action)="changeContent($event.index)"></kl-ui-navs-vertical>
        </nav>
        <main class="massage">
          <ng-template kl-nav-content></ng-template>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .email-app nav {
      line-height: 0;
      font-size: 0.8rem;
    }
  `]
})
/*
<a href="javascript:void(0)" class="btn btn-danger btn-block">BT Yönetim</a>
 */
export class NavsContentComponent implements OnInit {

  @Input() public contents: AddContent[];
  @ViewChild(NavContentDirective) klNavsContent: NavContentDirective;

  public navs: UINavLink[] = [
    { icon: 'fa fa-address-card', title: 'Şirketler', link: '' },
    { icon: 'fa fa-arrows', title: 'Bölgeler', link: '' },
    { icon: 'fa fa-sitemap', title: 'Şubeler', link: '' },
    { icon: 'fa fa-truck', title: 'Depolar', link: '' },
    { icon: 'fa fa-users', title: 'Kullanıcılar', link: '' },
    { icon: 'fa fa-address-book-o', title: 'Kullanıcı Rolleri', link: '' },
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.changeContent(0);
  }

  changeContent(index) {
    let addContent = this.contents[index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(addContent.component);

    let viewContainerRef = this.klNavsContent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AddComponent>componentRef.instance).data = addContent.data;
  }
}
