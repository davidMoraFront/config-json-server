import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent implements OnInit {
  autohide = true;

  constructor(public toastService: ToastService) { }

  ngOnInit(): void {
  }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

}
