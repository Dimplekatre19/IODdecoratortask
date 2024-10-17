import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
 @Output() todoEmiter:EventEmitter<Itodo>=new EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }

  onTodoAdd(todoForm:NgForm){
      if(todoForm.valid){
        //console.log(todoForm.value)
        let todoObj:Itodo={...todoForm.value, todoRating:+todoForm.controls['todoRating'].value}
       // console.log(todoObj)
       todoForm.reset()
         this.todoEmiter.emit(todoObj);
      }
  }

}
