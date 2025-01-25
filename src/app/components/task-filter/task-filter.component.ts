import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskStatus } from '../../enums/task-status.enum';
import { NgClass } from '@angular/common';
import { ITask } from '../../models/task.model';
import { TaskStatusFilterPipe } from '../../pipes/task-status-filter.pipe';

@Component({
  selector: 'task-filter',
  imports: [NgClass, TaskStatusFilterPipe],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css',
})
export class TaskFilterComponent {
  @Input() activeLink: TaskStatus = TaskStatus.ALL;
  @Input() tasks: ITask[] = [];
  @Output() onClick = new EventEmitter<TaskStatus>();
  TaskStatus = TaskStatus;

  handleClick(event: Event, status: TaskStatus) {
    event.preventDefault();
    this.activeLink = status;
    this.onClick.emit(status);
  }
}
