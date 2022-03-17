import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmedecinsComponent } from './listmedecins.component';

describe('ListmedecinsComponent', () => {
  let component: ListmedecinsComponent;
  let fixture: ComponentFixture<ListmedecinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmedecinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmedecinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
