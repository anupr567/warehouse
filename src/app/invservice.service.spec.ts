import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InvserviceService } from './invservice.service';

describe('InvserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: InvserviceService = TestBed.get(InvserviceService);
    expect(service).toBeTruthy();
  });
});
