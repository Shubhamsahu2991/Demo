import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationActiveLinksComponent } from './navigation-active-links.component';

describe('NavigationActiveLinksComponent', () => {
  let component: NavigationActiveLinksComponent;
  let fixture: ComponentFixture<NavigationActiveLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationActiveLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationActiveLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
