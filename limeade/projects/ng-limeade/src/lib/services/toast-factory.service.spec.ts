import { TestBed } from '@angular/core/testing';

import { ToastFactoryService } from './toast-factory.service';
import {Observable} from "rxjs";
import {ToastInterface} from "../models/ToastInterface";

describe('ToastFactoryService', () => {
  let service: ToastFactoryService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(ToastFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return subject as observable when getToast is called', () => {
    const result = service.getToast();
    expect(result).toEqual(jasmine.any(Observable));
  });

  it('should push a new toast object through the subject', () => {
    const mockToast: ToastInterface = {
      type: 'success',
      title: 'Woohoo!'
    };
    service.getToast().subscribe((res) => {
      expect(res).toEqual(mockToast);
    });

    service.showToast(mockToast);
  });

  it('should push a null value when clear is called', () => {
    service.getToast().subscribe((res) => {
      expect(res).toBeNull();
    });

    service.clear();
  });
});
