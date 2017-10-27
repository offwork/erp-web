import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kl-cell-action-group',
  template: `
    <ng-template #popTemplate>
      <div>
        <button class=" btn btn-outline-primary btn-sm">Değiştir</button>
        <button class=" btn btn-outline-success btn-sm">İncele</button>
        <button class=" btn btn-outline-danger btn-sm">Sil</button>
      </div>
    </ng-template>
    <button type="button" class="btn btn-success"
            [popover]="popTemplate" popoverTitle="İşlem Seç">
      <i class="fa fa-cog" aria-hidden="true"></i>
    </button>
  `
})

export class CellActionComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
