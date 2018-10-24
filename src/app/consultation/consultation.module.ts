import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDisplayComponent } from './book-display/book-display.component';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from './book-list/book-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BookItemComponent } from './book-item/book-item.component';
import { ConsultationHomeComponent } from './consultation-home/consultation-home.component';

const routes: Routes = [
  {
    path: 'consultation',
    component: ConsultationHomeComponent,
    children: [
      { path: '', component: BookListComponent },
      { path: ':id', component: BookDisplayComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    BookDisplayComponent,
    BookListComponent,
    BookItemComponent,
    ConsultationHomeComponent
  ],
  exports: [BookDisplayComponent, BookListComponent]
})
export class ConsultationModule {}
