import { TestBed } from '@angular/core/testing';

import { AssignedAssetService } from './assigned-asset.service';

describe('AssignedAssetService', () => {
  let service: AssignedAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
