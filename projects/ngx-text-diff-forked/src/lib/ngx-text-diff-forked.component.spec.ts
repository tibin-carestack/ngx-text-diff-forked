import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTextDiffForkedComponent } from './ngx-text-diff-forked.component';

describe('NgxTextDiffForkedComponent', () => {
  let component: NgxTextDiffForkedComponent;
  let fixture: ComponentFixture<NgxTextDiffForkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxTextDiffForkedComponent]
    });
    fixture = TestBed.createComponent(NgxTextDiffForkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
