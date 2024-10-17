import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
   stdArr:Array<Istd>=[
    {
      fname:'jhon',
      lname:'doe',
      email:'jd01@gmail.com',
      contact:8976437483,
      isActive:'active'
    },
    {
      fname:'june',
      lname:'deo',
      email:'june66@gmail.com',
      contact:997644533,
      isActive:'in-active'
    },
    {
      fname:'may',
      lname:'dan',
      email:'mayd19@gmail.com',
      contact:778643709,
      isActive:'active'
    },

   ]
   constructor() { }

  ngOnInit(): void {
  }
 onStdget(std:Istd){
     this.stdArr.push(std);
 }
}
