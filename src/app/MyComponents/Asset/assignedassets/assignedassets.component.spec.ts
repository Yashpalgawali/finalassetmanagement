import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedassetsComponent } from './assignedassets.component';

describe('AssignedassetsComponent', () => {
  let component: AssignedassetsComponent;
  let fixture: ComponentFixture<AssignedassetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedassetsComponent]
    });
    fixture = TestBed.createComponent(AssignedassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
