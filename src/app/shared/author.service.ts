import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) {}

  create(author: Author): Observable<Author> {
    return this.http.post<Author>('/api/authors', author);
  }
}
