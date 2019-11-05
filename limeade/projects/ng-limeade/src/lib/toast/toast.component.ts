import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ToastInterface } from '../models/ToastInterface';

@Component({
  selector: 'limeade-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() type: 'success' | 'info' | 'error' | 'warning';
  @Input() title: string;
  @Input() description: string;
  @Output() toastClicked: EventEmitter<ToastInterface> = new EventEmitter<ToastInterface>();

  constructor() { }

  ngOnInit() {
  }

  toastClick() {
    const toast: ToastInterface = {
      type: this.type,
      title: this.title,
      description: this.description
    }
    console.log('Toast Click Method');
    this.toastClicked.emit(toast);
  }

}
