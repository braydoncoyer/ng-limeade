import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';
import {Component, Input} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fa-icon',
  template: ''
})
class MockIconComponent {
  @Input() icon: string;
}

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastComponent, MockIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ensure that input properties are being set correctly', () => {
    component.type = 'success';
    component.title = 'Something!';
    component.index = 5;
    component.iconName = 'coffee';

    expect(component.type).toBe('success');
    expect(component.title).toBe('Something!');
    expect(component.index).toEqual(5);
    expect(component.iconName).toBe('coffee');
  });

  it('should make sure that the event emitter is called', () => {
    const spy = spyOn(component.toastClicked, 'emit');
    component.toastClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should return the correct icon name when getIconName is called', () => {
    component.type = 'success';
    const result = component.getIconName();
    expect(result).toBe('check');
  });

  it('should return check if type is null and when getIconName is called', () => {
    component.iconName = null;
    const result = component.getIconName();
    expect(result).toBe('check');
  });

  it('should return question if type is INFO and when getIconName is called', () => {
    component.iconName = null;
    component.type = 'info';
    const result = component.getIconName();
    expect(result).toBe('question');
  });

  it('should return exclamation if type is WARNING and when getIconName is called', () => {
    component.iconName = null;
    component.type = 'warning';
    const result = component.getIconName();
    expect(result).toBe('exclamation');
  });

  it('should return times if type is ERROR and when getIconName is called', () => {
    component.iconName = null;
    component.type = 'error';
    const result = component.getIconName();
    expect(result).toBe('times');
  });
});
