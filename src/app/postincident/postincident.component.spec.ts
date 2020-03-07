import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostincidentComponent } from './postincident.component';

describe('PostincidentComponent', () => {
  let component: PostincidentComponent;
  let fixture: ComponentFixture<PostincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
