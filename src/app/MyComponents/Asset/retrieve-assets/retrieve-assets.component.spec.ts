import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveAssetsComponent } from './retrieve-assets.component';

describe('RetrieveAssetsComponent', () => {
  let component: RetrieveAssetsComponent;
  let fixture: ComponentFixture<RetrieveAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrieveAssetsComponent]
    });
    fixture = TestBed.createComponent(RetrieveAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
