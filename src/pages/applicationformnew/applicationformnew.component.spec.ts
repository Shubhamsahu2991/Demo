import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationformnewComponent } from './applicationformnew.component';

describe('ApplicationformnewComponent', () => {
  let component: ApplicationformnewComponent;
  let fixture: ComponentFixture<ApplicationformnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationformnewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationformnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
