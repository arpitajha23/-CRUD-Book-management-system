import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklibraryComponent } from './booklibrary/booklibrary.component';

const routes: Routes = [
  {path: 'add', component:AddbookComponent},
  {path: 'liba', component:BooklibraryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooklibraryRoutingModule { }
