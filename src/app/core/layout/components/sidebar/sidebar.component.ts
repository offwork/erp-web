import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kl-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})

export class SidebarComponent implements OnInit {

  public sidebarNav = [
    {
      label: 'Dashboard',
      link: '/dashboard/index',
      icon: 'dashboard',
      type: ''
    },
    {
      label: 'Malzeme Yönetimi',
      icon: 'storage',
      submenu: [
        {
          label: 'Kartlar',
          link: 'dashboard/malzeme/kart',
          icon: 'description',
        },
        {
          label: 'Hareketler',
          link: 'dashboard/malzeme/hareketler',
          icon: 'receipt',
        },
        {
          label: 'Raporlar',
          link: 'dashboard/malzeme/raporlar',
          icon: 'assessment',
        },
      ]
    },
    {
      label: 'Satınalma',
      icon: 'shopping_cart',
      submenu: [
        {
          label: 'Kartlar',
          link: '/dashboard/satinalma/kart',
          icon: 'description',
          submenu: [
            {
              label: 'Kart Sub',
              icon: 'cart',
              submenu: [
                {
                  label: 'Kart Sub2',
                  icon: 'cart'
                }
              ]
            }
          ]
        },
        {
          label: 'Haraketler',
          link: '/dashboard/satinalma/hareketler',
          icon: 'receipt',
          submenu: [
            {
              label: 'Haraket Sub',
              icon: 'cart',
              submenu: [
                {
                  label: 'Haraket Sub2',
                  icon: 'cart'
                }
              ]
            }
          ]
        },
        {
          label: 'Raporlar',
          link: '/dashboard/satinalma/raporlar',
          icon: 'assessment',
        }
      ]
    },
    {
      label: 'Satış & Dağıtım',
      icon: 'local_shipping',
      submenu: [
        {
          label: 'Kartlar',
          icon: 'description',
          link: '/dashboard/sales/kart'
        },
        {
          label: 'Hareketler',
          icon: 'receipt',
          link: '/dashboard/sales/haraket'
        },
        {
          label: 'Raporlar',
          icon: 'assessment',
          link: '/dashboard/sales/rapor'
        }
      ]
    },
    {
      label: 'Finans Yönetimi',
      icon: 'card_travel',
      submenu: [
        {
          label: 'Kartlar',
          icon: 'description',
          link: '/dashboard/finance/kart'
        },
        {
          label: 'Hareketler',
          icon: 'receipt',
          link: '/dashboard/finance/haraketler'
        },
        {
          label: 'Raporlar',
          icon: 'assessment',
          link: '/dashboard/finance/raporlar'
        }
      ]
    }
  ];

    constructor(private store: Store<any>) {
      this.store
        .select('layout')
        .subscribe((res: any) => {
          //this.sidebarNav = res.sidebarNav;
          //console.log('Menu: ', this.sidebarNav);
        });
    }

    ngOnInit() {}
}
