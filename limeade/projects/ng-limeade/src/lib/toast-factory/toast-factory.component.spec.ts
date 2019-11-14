import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFactoryComponent } from './toast-factory.component';
import {Component, EventEmitter, Input, Output} from '@angular/core';

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

describe('ToastFactoryComponent', () => {
  let component: ToastFactoryComponent;
  let fixture: ComponentFixture<ToastFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastFactoryComponent, MockLimeadeToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
