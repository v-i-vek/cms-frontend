import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { siteComponent } from './site.component';

describe('NotificationsComponent', () => {
  let component: siteComponent;
  let fixture: ComponentFixture<siteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ siteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(siteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
