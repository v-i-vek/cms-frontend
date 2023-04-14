import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSerComponent } from './dialogService.component';

describe('DialogSerComponent', () => {
  let component: DialogSerComponent;
  let fixture: ComponentFixture<DialogSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
