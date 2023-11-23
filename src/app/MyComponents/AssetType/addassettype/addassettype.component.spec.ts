import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassettypeComponent } from './addassettype.component';

describe('AddassettypeComponent', () => {
  let component: AddassettypeComponent;
  let fixture: ComponentFixture<AddassettypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddassettypeComponent]
    });
    fixture = TestBed.createComponent(AddassettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
