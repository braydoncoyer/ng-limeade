import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'limeade-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() type: 'success' | 'info' | 'error' | 'warning';
  @Input() title: string;
  @Input() description: string;
  @Input() index: number;
  @Output() toastClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  toastClick() {
    this.toastClicked.emit(this.index);
  }

}
