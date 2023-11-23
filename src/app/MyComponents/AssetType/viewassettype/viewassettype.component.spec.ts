import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassettypeComponent } from './viewassettype.component';

describe('ViewassettypeComponent', () => {
  let component: ViewassettypeComponent;
  let fixture: ComponentFixture<ViewassettypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewassettypeComponent]
    });
    fixture = TestBed.createComponent(ViewassettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
