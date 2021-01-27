import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  providers: [TodoDataService],
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  trashIco = faTrash;

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoId(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  ngOnInit(): void {
  }
  test2 = 'My Todo';
  
}

export class Todo {
  
  id: number;
  title: string = 'test';
  complete: boolean = false; 
  
  constructor(values: Object = {}){
    Object.assign(this, values);
  }
  
}
