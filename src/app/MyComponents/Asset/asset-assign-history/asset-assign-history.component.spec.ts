import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAssignHistoryComponent } from './asset-assign-history.component';

describe('AssetAssignHistoryComponent', () => {
  let component: AssetAssignHistoryComponent;
  let fixture: ComponentFixture<AssetAssignHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetAssignHistoryComponent]
    });
    fixture = TestBed.createComponent(AssetAssignHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
