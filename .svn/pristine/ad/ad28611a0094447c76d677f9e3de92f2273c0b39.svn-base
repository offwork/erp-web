import { Injectable } from '@angular/core';
import { assign, noop } from 'lodash';
import swal, { SweetAlertOptions } from 'sweetalert2'
import { ToastyService, ToastyConfig } from 'ng2-toasty';

@Injectable()
export class UIService {
  constructor(
    private toastService: ToastyService,
    private toastConfig: ToastyConfig) {
    this.toastConfig.limit = 10;
    this.toastConfig.theme = 'bootstrap';
    this.toastConfig.position = 'top-center';
    this.toastConfig.timeout = 5000;
  }

  toastDefault(title, msg) {
    this.toastService.default({ title, msg });
  }

  toastError(title, msg) {
    this.toastService.error({ title, msg });
  }

  toastInfo(title, msg) {
    this.toastService.info({ title, msg });
  }

  toastSuccess(title, msg) {
    this.toastService.success({ title, msg });
  }

  toastWait(title, msg) {
    this.toastService.wait({ title, msg });
  }

  toastWarning(title, msg) {
    this.toastService.warning({ title, msg });
  }


  alert(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions: any = {
      type: options.type || null,
      title: options.title || null,
      text: options.text || null,
      buttonsStyling: options.buttonsStyling || false,
      confirmButtonText: 'Devam et',
      cancelButtonText: 'Vazgeç',
      confirmButtonClass : options.confirmButtonClass || 'btn btn-md btn-secondary',
      animation: options.animation || true,
      customClass: options.customClass || '',
    };

    if (closeCb !== noop) {
      defaultOptions.showCancelButton = options.showCancelButton || true;
      defaultOptions.cancelButtonClass = options.cancelButtonClass || 'btn btn-md btn-secondary';
    }

    return swal(assign(defaultOptions, options))
      .then(res => successCb(res), dismiss => closeCb(dismiss));
  }

  alertSuccess(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'success',
      confirmButtonClass: 'btn btn-md btn-success',
    };
    return this.alert(assign(defaultOptions, options), successCb, closeCb);
  }

  alertWarning(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'warning',
      confirmButtonClass: 'btn btn-md btn-warning',
    };
    return this.alert(assign(defaultOptions, options), successCb, closeCb);
  }

  alertError(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'error',
      confirmButtonClass: 'btn btn-md btn-danger',
    };
    return this.alert(assign(defaultOptions, options), successCb, closeCb);
  }

  alertInfo(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'info',
      confirmButtonClass: 'btn btn-md btn-info',
    };
    return this.alert(assign(defaultOptions, options), successCb, closeCb);
  }

  alertQuestion(options: any = {}, successCb = noop, closeCb = noop) {
    const defaultOptions = {
      type: 'question',
      confirmButtonClass: 'btn btn-md btn-primary',
    };
    return this.alert(assign(defaultOptions, options), successCb, closeCb);
  }
}
