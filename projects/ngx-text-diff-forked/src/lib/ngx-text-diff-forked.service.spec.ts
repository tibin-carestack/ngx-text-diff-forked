import { TestBed } from '@angular/core/testing';

import { NgxTextDiffForkedService } from './ngx-text-diff-forked.service';

describe('NgxTextDiffForkedService', () => {
  let service: NgxTextDiffForkedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTextDiffForkedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
