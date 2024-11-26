import { TestBed } from '@angular/core/testing';

import { BlogButtonService } from './blog-button.service';

describe('BlogButtonService', () => {
  let service: BlogButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
