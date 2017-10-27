import {Component, Input, OnInit} from '@angular/core';
import { AddComponent } from '../../../add.component'

@Component({
  template: `
    <div class="details">
      <h2>Depolar Sekmesi</h2>
    </div>
  `
})

export class StoresComponent implements OnInit, AddComponent {

  @Input() public data: any;

  constructor() {}

  ngOnInit() {}
}
