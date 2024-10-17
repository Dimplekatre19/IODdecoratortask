import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
   @Input() todosData!:Array<Itodo>
  constructor() { }

  ngOnInit(): void {
  }

}
