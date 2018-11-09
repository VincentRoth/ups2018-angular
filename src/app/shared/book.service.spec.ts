import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService]
    }));

  it('should be created', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
