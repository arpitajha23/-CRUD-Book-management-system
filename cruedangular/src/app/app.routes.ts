import { Routes } from '@angular/router';
import { AddbookComponent } from './booklibrary/addbook/addbook.component';

export const routes: Routes = [
    { path: '',component:AddbookComponent },
   // { path: 'add', component: AddbookComponent },
    {path: 'booklibrary', loadChildren: ()=> import('./booklibrary/booklibrary-routing.module').then(m => m.BooklibraryRoutingModule)},
    // {path: '**', redirectTo: '/add', component:AddbookComponent}
    

];
