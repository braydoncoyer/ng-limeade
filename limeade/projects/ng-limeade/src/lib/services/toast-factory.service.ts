import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastInterface } from '../ToastInterface';

@Injectable({
  providedIn: 'root'
})
export class ToastFactoryService {

  subject = new Subject<ToastInterface>();

  constructor() { }

  getToast(): Observable<any> {
    console.log('Inside getToast');
    return this.subject.asObservable();
  }

  showToast(toastObj: ToastInterface): void {
    this.subject.next(toastObj);
  }

  clear() {
    this.subject.next(null);
  }
}
