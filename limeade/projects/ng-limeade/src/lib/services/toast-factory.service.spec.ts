import { TestBed } from '@angular/core/testing';

import { ToastFactoryService } from './toast-factory.service';
import {Observable} from 'rxjs';
import {ToastInterface} from '../models/ToastInterface';

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

  it('should show a new toast with default values if TYPE is not passed in', () => {
    const mockToast: ToastInterface = {
    };

    const expectedToast: ToastInterface = {
      type: 'success',
      title: 'Success!'
    };

    service.getToast().subscribe((res) => {
      expect(res).toEqual(expectedToast);
    });

    service.showToast(mockToast);
  });

  it('should show a default toast if NOTHING is passed into showToast()', () => {
    const expectedToast: ToastInterface = {
      type: 'success',
      title: 'Success!'
    };

    service.getToast().subscribe((res) => {
      expect(res).toEqual(expectedToast);
    });

    service.showToast();
  })

  it('should push a null value when clear is called', () => {
    service.getToast().subscribe((res) => {
      expect(res).toBeNull();
    });

    service.clear();
  });
});
