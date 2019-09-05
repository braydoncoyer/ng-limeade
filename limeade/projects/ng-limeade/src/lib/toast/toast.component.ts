import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'limeade-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  @Input() type: 'success' | 'info' | 'error' | 'warning';

  constructor() { }

  ngOnInit() {
  }

}
