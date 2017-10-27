import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {InternalStorage} from "../../../../shared/storage/storage.swaps";

@Component({
  selector: 'kl-dashboard',
  template: `
    <kl-content-dashboard></kl-content-dashboard>
    <kl-system-dashboard></kl-system-dashboard>
  `
})

export class DashboardComponent implements OnInit {
  constructor(private store: Store<any>, private storage: InternalStorage) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .subscribe(res => {});
    console.log(this.storage.get('access_token'));
  }
}
