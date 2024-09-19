import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2gloginComponent } from './g2glogin.component';

describe('G2gloginComponent', () => {
  let component: G2gloginComponent;
  let fixture: ComponentFixture<G2gloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [G2gloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G2gloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
