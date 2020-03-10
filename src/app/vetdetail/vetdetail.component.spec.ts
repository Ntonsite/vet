import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetdetailComponent } from './vetdetail.component';

describe('VetdetailComponent', () => {
  let component: VetdetailComponent;
  let fixture: ComponentFixture<VetdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
