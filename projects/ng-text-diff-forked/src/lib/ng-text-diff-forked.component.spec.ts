import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTextDiffForkedComponent } from './ng-text-diff-forked.component';

describe('NgTextDiffForkedComponent', () => {
  let component: NgTextDiffForkedComponent;
  let fixture: ComponentFixture<NgTextDiffForkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTextDiffForkedComponent]
    });
    fixture = TestBed.createComponent(NgTextDiffForkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
