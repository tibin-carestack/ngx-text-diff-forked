import { TestBed } from '@angular/core/testing';

import { NgTextDiffForkedService } from './ng-text-diff-forked.service';

describe('NgTextDiffForkedService', () => {
  let service: NgTextDiffForkedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTextDiffForkedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
