import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HIJOComponent } from './hijo.component';

describe('HIJOComponent', () => {
  let component: HIJOComponent;
  let fixture: ComponentFixture<HIJOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HIJOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HIJOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
