import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSiteComponent } from './dialogSite.component';

describe('DialogSiteComponent', () => {
  let component: DialogSiteComponent;
  let fixture: ComponentFixture<DialogSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
