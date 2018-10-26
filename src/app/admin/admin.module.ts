import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [{ path: '', component: BookComponent }]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [AdminHomeComponent, BookComponent]
})
export class AdminModule {}
