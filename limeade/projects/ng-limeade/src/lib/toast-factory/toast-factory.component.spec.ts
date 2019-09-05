import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFactoryComponent } from './toast-factory.component';

describe('ToastFactoryComponent', () => {
  let component: ToastFactoryComponent;
  let fixture: ComponentFixture<ToastFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastFactoryComponent ]
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
