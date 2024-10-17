import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-tododasboard',
  templateUrl: './tododasboard.component.html',
  styleUrls: ['./tododasboard.component.scss']
})
export class TododasboardComponent implements OnInit {
  todoArr:Array<Itodo>=[
    {
      todoItem:'Javascript',
      todoRating:4
    },
    {
      todoItem:'Flex',
      todoRating:3
    },
    {
      todoItem:'Sass',
      todoRating:2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getTodo(todo : Itodo){
     this.todoArr.push(todo);
  }

}
