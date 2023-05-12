import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTableComponent } from './above-table.component';

describe('AboveTableComponent', () => {
  let component: AboveTableComponent;
  let fixture: ComponentFixture<AboveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboveTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
