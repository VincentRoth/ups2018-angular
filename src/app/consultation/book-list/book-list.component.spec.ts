import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookItemComponent } from '../book-item/book-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from 'src/app/shared/book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookItemComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [BookService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
