import { Component, OnInit } from '@angular/core';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState } from '../store';
import { Action } from '../actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})

export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  clearTodos(){
    this.ngRedux.dispatch({type: Action.REMOVE_ALL});
  }

}