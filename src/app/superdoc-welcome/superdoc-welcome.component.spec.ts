import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperdocWelcomeComponent } from './superdoc-welcome.component';

describe('SuperdocWelcomeComponent', () => {
  let component: SuperdocWelcomeComponent;
  let fixture: ComponentFixture<SuperdocWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperdocWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperdocWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
