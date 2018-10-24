import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultationModule } from './consultation/consultation.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'consultation', pathMatch: 'full' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConsultationModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
