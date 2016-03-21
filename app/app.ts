import {Component} from 'angular2/core';
import {TodosList} from './todos-list.component';
import {Todo} from './todo';

@Component({
  selector: 'my-app',
  template: `
    <h4>Todos list</h4>
    <h5>Number of todos: <span class="badge">{{todos.length}}</span></h5>
    <todos-list [todos]="todos"></todos-list>
  `,
  directives: [TodosList]
})
export class App {
  todos: Array<Todo>;
  constructor() {
    this.todos = [
      new Todo('Item 1', 'Description 1', 'Jesse'),
      new Todo('Item 2', 'Description 2', 'Jesse'),
      new Todo('Item 3', 'Description 3', 'Jesse')
    ];
  }
}
