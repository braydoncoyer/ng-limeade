import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLimeadeComponent } from './ng-limeade.component';

describe('NgLimeadeComponent', () => {
  let component: NgLimeadeComponent;
  let fixture: ComponentFixture<NgLimeadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgLimeadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLimeadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
