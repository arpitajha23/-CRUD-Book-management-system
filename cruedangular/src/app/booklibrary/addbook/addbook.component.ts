import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  constructor (private route:Router){
    
  }

  change(){
    console.log("change");

  }
  Dashboard(){
    this.route.navigate(['booklibrary/liba'])

  }
}
