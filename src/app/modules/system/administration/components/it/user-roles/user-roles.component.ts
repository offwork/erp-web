import {Component, Input, OnInit} from '@angular/core';
import { AddComponent } from '../../../add.component'

@Component({
  template: `
    <div class="details">
      <h2>Kullanıcı Rolleri Sekmesi</h2>
    </div>
  `
})

export class UserRolesComponent implements OnInit, AddComponent {

  @Input() public data: any;

  constructor() {}

  ngOnInit() {}
}
