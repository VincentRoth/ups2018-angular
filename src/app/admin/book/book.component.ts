import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookService } from 'src/app/shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.book = new Book();
  }

  onSubmit(form) {
    // Can do something with form
    if (!form.valid) {
      this.bookService
        .createBook(this.book)
        .subscribe(() => (this.book = new Book()));
    }
  }
}
