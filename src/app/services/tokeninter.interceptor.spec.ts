import { TestBed } from '@angular/core/testing';

import { TokeninterInterceptor } from './tokeninter.interceptor';

describe('TokeninterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokeninterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokeninterInterceptor = TestBed.inject(TokeninterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
