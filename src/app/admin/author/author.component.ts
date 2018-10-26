import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorService } from 'src/app/shared/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  constructor(private authorService: AuthorService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.authorForm);
    // TODO
    this.authorService.create(this.authorForm.value).subscribe();
  }
}
