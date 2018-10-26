import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { UppercaseDirective } from './uppercase.directive';
import { AuthorService } from './author.service';

@NgModule({
  imports: [CommonModule],
  declarations: [UppercaseDirective],
  exports: [UppercaseDirective],
  providers: [BookService, AuthorService]
})
export class SharedModule {}
