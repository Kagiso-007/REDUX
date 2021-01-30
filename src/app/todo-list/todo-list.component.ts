import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { Action } from '../actions';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: Action.ADD_TODO, todo: this.model});
  }
  toggleTodo(todo: ITodo){
    this.ngRedux.dispatch({type: Action.TOGGLE_TODO, id: todo.id});
  }
  removeTodo(todo){
    this.ngRedux.dispatch({type: Action.REMOVE_TODO, id: todo.id});
  }
}
