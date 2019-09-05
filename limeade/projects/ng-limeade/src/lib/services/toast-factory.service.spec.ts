import { TestBed } from '@angular/core/testing';

import { ToastFactoryService } from './toast-factory.service';

describe('ToastFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastFactoryService = TestBed.get(ToastFactoryService);
    expect(service).toBeTruthy();
  });
});
