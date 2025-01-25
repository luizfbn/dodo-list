import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { HeaderComponent } from './components/header/header.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskFilterComponent } from './components/task-filter/task-filter.component';
import { TaskComponent } from './components/task/task.component';
import { TaskStatusFilterPipe } from './pipes/task-status-filter.pipe';
import { TaskStatus } from './enums/task-status.enum';
import { ITask } from './models/task.model';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    TaskComponent,
    TaskInputComponent,
    TaskFilterComponent,
    TaskStatusFilterPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1, transform: 'initial' }),
        animate('250ms', style({ opacity: 0, transform: 'translateX(60px)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  tasks: ITask[] = [];
  filterStatus: TaskStatus = TaskStatus.ALL;

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) this.tasks = JSON.parse(savedTasks);
  }

  saveTasks() {
    this.tasks = [...this.tasks];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask(taskName: string) {
    this.tasks.unshift({
      id: `${Date.now()}-${Math.random()}`,
      name: taskName,
      done: false,
    });
    this.saveTasks();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.done === b.done) {
        return 0;
      }
      return a.done ? 1 : -1;
    });
    this.saveTasks();
  }

  filterTasks(status: TaskStatus) {
    this.filterStatus = status;
  }
}
