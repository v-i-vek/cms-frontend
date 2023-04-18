import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesilderComponent } from './homesilder.component';

describe('HomesilderComponent', () => {
  let component: HomesilderComponent;
  let fixture: ComponentFixture<HomesilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
