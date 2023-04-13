import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { servicecmComponent } from './servicecm.component';

describe('TypographyComponent', () => {
  let component: servicecmComponent;
  let fixture: ComponentFixture<servicecmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ servicecmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(servicecmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
