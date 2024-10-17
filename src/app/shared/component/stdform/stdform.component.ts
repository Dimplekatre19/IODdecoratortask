import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
 @Output() stdEmiter:EventEmitter<Istd>=new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }
onStdAdd(stdForm:NgForm){
  if(stdForm.valid){
    this.stdEmiter.emit(stdForm.value)
    stdForm.reset()
  }
   
}


}
