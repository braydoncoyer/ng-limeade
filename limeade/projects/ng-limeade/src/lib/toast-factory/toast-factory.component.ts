import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastInterface } from '../models/ToastInterface';
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

  removeToast(toastToRemove): void {
    this.toasts.splice(toastToRemove, 1);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
