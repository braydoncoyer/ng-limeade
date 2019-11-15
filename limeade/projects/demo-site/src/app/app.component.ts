import {Component, OnInit} from '@angular/core';
import { ToastFactoryService } from 'ng-limeade';
import { ToastInterface } from '../../../ng-limeade/src/lib/models/ToastInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-site';
  constructor(private toastService: ToastFactoryService) {}

  ngOnInit(): void {
    const toast = {
      title: null,
      type: 'warning',
      description: 'This is a warning from app'
    };
    this.toastService.showToast(toast);
  }

  toast(type: string) {
    const toast: ToastInterface = {
      type,
      title: type
    };
    this.toastService.showToast(toast);
  }

  customToast(type: string, icon: string) {
    const toast: ToastInterface = {
      type: 'info',
      title: 'Some info for you...',
      description: 'Please note that at the end of the day we will be restarting our systems.'
    };
    this.toastService.showToast(toast);
  }
}
