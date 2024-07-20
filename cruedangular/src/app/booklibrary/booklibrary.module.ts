import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooklibraryRoutingModule } from './booklibrary-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { BooklibraryComponent } from './booklibrary/booklibrary.component';


@NgModule({
  declarations: [ AppComponent,
    BooklibraryComponent],
  imports: [
    CommonModule,
    BooklibraryRoutingModule,
    FormsModule 
  ]
})
export class BooklibraryModule { }
