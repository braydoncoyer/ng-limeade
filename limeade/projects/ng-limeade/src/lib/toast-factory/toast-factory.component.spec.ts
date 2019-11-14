import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFactoryComponent } from './toast-factory.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToastFactoryService} from '../services/toast-factory.service';
import {of} from 'rxjs';
import {ToastInterface} from "../models/ToastInterface";

@Component({
  selector: 'limeade-toast',
  template: ''
})
class MockLimeadeToastComponent {
  @Input() type: 'success' | 'info' | 'error' | 'warning';
  @Input() title: string;
  @Input() description: string;
  @Input() index: number;
  @Input() iconName: string;
  @Output() toastClicked: EventEmitter<number> = new EventEmitter<number>();
}

class MockToastFactoryService {
  getToast() {
    return of(null)
  }
}

describe('ToastFactoryComponent', () => {
  let component: ToastFactoryComponent;
  let fixture: ComponentFixture<ToastFactoryComponent>;
  let toastFactoryService: ToastFactoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastFactoryComponent, MockLimeadeToastComponent ],
      providers: [{provide: ToastFactoryService, useClass: MockToastFactoryService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    toastFactoryService = TestBed.get(ToastFactoryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set toasts array to empty if no toast comes through subscription onInit', () => {
    spyOn(toastFactoryService, 'getToast').and.returnValue(of(null));
    const toast: ToastInterface = {
      type: 'success',
      title: 'Success!',
    };
    component.toasts.push(toast);
    component.ngOnInit();
    expect(component.toasts).toEqual([]);
  });

  it('should add to toasts array if toast comes through subscription onInit', () => {
    const toast: ToastInterface = {
      type: 'success',
      title: 'Success!',
    };
    spyOn(toastFactoryService, 'getToast').and.returnValue(of(toast));
    component.ngOnInit();
    expect(component.toasts).toEqual([toast]);
  });

  it('should remove toast from array when removeToast is called', () => {
    const toast1: ToastInterface = {
      type: 'success',
      title: 'Success!',
    };

    const toast2: ToastInterface = {
      type: 'error',
      title: 'Error!',
    };

    component.toasts.push(toast1);
    component.toasts.push(toast2);

    component.removeToast(0);
    expect(component.toasts).toEqual([toast2]);
  });

  it('should call the unsubscribe method when ngOnDestroy is triggered', () => {
    const spy = spyOn(component.sub, 'unsubscribe');
    component.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
