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
      title: 'Warning, Yo!',
      type: 'warning',
      description: 'This is a warning from app'
    };
    this.toastService.showToast(toast);
  }

  toast(type: string) {
    const toast: ToastInterface = {
      type,
      title: type,
      description: 'This is a cool toast message! I live inside one of four types of notifications: success, info, warning and error!'
    };
    this.toastService.showToast(toast);
  }
}
