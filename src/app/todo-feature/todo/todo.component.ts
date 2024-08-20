import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ITask,
  status,
  TodoServiceService,
} from '../todoService/todo-service.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  taskStatus = status;
  tasks: ITask[] = [];
  todoForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
  });

  constructor(private taskService: TodoServiceService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onDone(event: MatCheckboxChange, task: ITask) {
    task.status = event.checked ? status.done : status.todo;
    this.taskService.updateTaskStatus(task.id, task.status);
  }

  onDelete(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  onSubmit() {
    const { title } = this.todoForm.value;
    if (!title || !this.todoForm.valid) return;
    this.taskService.addTask(title);
    this.tasks = this.taskService.getTasks();
    this.todoForm.reset();
  }
}
