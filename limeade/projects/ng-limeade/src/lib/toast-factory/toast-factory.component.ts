import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastInterface } from '../ToastInterface';
import { Subscription } from 'rxjs';
import { ToastFactoryService } from '../services/toast-factory.service';

@Component({
  selector: 'limeade-toast-factory',
  templateUrl: './toast-factory.component.html',
  styleUrls: ['./toast-factory.component.scss']
})
export class ToastFactoryComponent implements OnInit, OnDestroy {
  toasts: ToastInterface[] = [];
  sub: Subscription;

  toastWarning = {
    title: 'Warning!',
    type: 'warning',
    description: 'A warning toast!'
  };

  toastInfo = {
    title: 'Info...',
    type: 'info',
    description: 'Some info for you...'
  };


  constructor(private toastService: ToastFactoryService) { }

  ngOnInit() {
    this.sub = this.toastService.getToast().subscribe((toast: ToastInterface) => {
     if (!toast) {
       this.toasts = [];
       return;
     }
     this.toasts.unshift(toast);
   });
  }

  removeToast(toastToRemove: ToastInterface): void {
    this.toasts = this.toasts.filter(toasts => toasts !== toastToRemove);
  }

  ngOnDestroy(): void {
    console.log('Unsubscribe');
    this.sub.unsubscribe();
  }

  logToast() {
    this.toastService.showToast(this.toastWarning);
    console.log(this.toasts);
  }
}
