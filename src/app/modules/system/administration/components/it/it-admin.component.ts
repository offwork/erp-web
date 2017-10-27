import { Component, OnInit } from '@angular/core';

import { AddContentService } from '../../services/add-content.service';
import { AddContent } from '../../add-content';

@Component({
  selector: 'kl-administration',
  template: `
    <kl-add-navs-content [contents]="contents"></kl-add-navs-content>
  `,
  styles: [``]
})

export class ITAdministrationComponent implements OnInit {

  contents: AddContent[];

  constructor(private contentService: AddContentService) {}

  ngOnInit() {
    this.contents = this.contentService.getNavsContent();
  }
}
