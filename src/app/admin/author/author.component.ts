import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/shared/author.service';
import { Author } from 'src/app/shared/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl()
  });

  constructor(private authorService: AuthorService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.authorForm.valid) {
      const formValue = this.authorForm.value;
      const author = new Author();
      author.firstName = formValue.firstName;
      author.lastName = formValue.lastName;
      this.authorService.create(author).subscribe();
    }
  }

  get firstName() {
    return this.authorForm.get('firstName');
  }
}
