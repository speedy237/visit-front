import { TestBed } from '@angular/core/testing';

import { StandCellService } from './stand-cell.service';

describe('StandCellService', () => {
  let service: StandCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
