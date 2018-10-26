import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`/api/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`/api/books/${id}`);
  }
}
