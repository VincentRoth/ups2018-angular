import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => (this.books = data));
  }

  onDelete(event: Book) {
    this.books.splice(this.books.indexOf(event), 1);
    this.selectedBook = event;
    this.bookService.deleteBook(event.id).subscribe();
  }
}
