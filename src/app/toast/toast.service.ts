import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];
  timeDelay: number = 1500;

  constructor() { }

  show(textOrTpl: string, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(data: string) {
    this.show(data, { classname: 'bg-success text-light', delay: this.timeDelay });
  }

  showError(data: string) {
    this.show(data, { classname: 'bg-error text-light', delay: this.timeDelay });
  }
}
