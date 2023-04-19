import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialcmsComponent } from './materialcms.component';

describe('MaterialcmsComponent', () => {
  let component: MaterialcmsComponent;
  let fixture: ComponentFixture<MaterialcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialcmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
