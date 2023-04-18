import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlogoSectionComponent } from './clientlogo-section.component';

describe('ClientlogoSectionComponent', () => {
  let component: ClientlogoSectionComponent;
  let fixture: ComponentFixture<ClientlogoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientlogoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientlogoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
