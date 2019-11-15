import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastInterface } from '../models/ToastInterface';

@Injectable({
  providedIn: 'root'
})
export class ToastFactoryService {

  subject = new Subject<ToastInterface>();

  constructor() {}

  getToast(): Observable<any> {
    return this.subject.asObservable();
  }

  showToast(toastObj?: ToastInterface): void {
    if (toastObj) {
      if (!toastObj.type) {
        toastObj.type = 'success';
      }

      if (!toastObj.title) {
        toastObj.title = 'Success!';
      }

      this.subject.next(toastObj);
    } else {
      const defaultToast: ToastInterface = {
        type: 'success',
        title: 'Success!'
      };
      this.subject.next(defaultToast);
    }
  }

  clear() {
    this.subject.next(null);
  }
}
