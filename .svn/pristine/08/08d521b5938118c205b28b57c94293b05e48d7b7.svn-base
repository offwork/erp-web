import { Injectable } from '@angular/core';

import { FormService } from '../../core/ui';

@Injectable()
export class ContentService {

  constructor(private formService: FormService) { }

  public formConfigModal() {
    return {
      fields: [
        this.formService.input('code', {
          label: 'Code',
          placeholder: 'Code',
        }),
        this.formService.input('description', {
          label: 'Description',
          placeholder: 'Description',
        }),
      ],
      showCancel: false,
      hasHeader: false,
    };
  }
}
