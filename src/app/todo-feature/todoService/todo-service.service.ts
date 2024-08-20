import { Injectable } from '@angular/core';

export enum status {
  todo,
  done,
}

export interface ITask {
  id: number;
  title: string;
  status: status;
}

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private tasks: ITask[] = [
    {
      id: 1,
      title: 'Mock task',
      status: status.todo,
    },
  ];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(title: string) {
    const newTaskId =
      this.tasks.length === 0
        ? 1
        : this.tasks.reduce(
            (prev, curr) => Math.max(prev, curr.id),
            this.tasks[0].id
          ) + 1;
    this.tasks = [
      ...this.tasks,
      {
        id: newTaskId,
        title: title,
        status: status.todo,
      },
    ];
    console.log('added ', this.tasks);
  }

  updateTaskStatus(taskId: number, status: status) {
    let updateTask = this.tasks.find((i) => i.id === taskId);
    if (!updateTask) return;
    updateTask.status = status;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((i) => i.id !== taskId);
  }
}
