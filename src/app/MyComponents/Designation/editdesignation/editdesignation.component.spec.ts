import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdesignationComponent } from './editdesignation.component';

describe('EditdesignationComponent', () => {
  let component: EditdesignationComponent;
  let fixture: ComponentFixture<EditdesignationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdesignationComponent]
    });
    fixture = TestBed.createComponent(EditdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
