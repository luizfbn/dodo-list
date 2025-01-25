import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/task.model';
import { TaskStatus } from '../enums/task-status.enum';

@Pipe({
  name: 'taskStatusFilter',
})
export class TaskStatusFilterPipe implements PipeTransform {
  transform(tasks: ITask[], status: TaskStatus): ITask[] {
    if (status === TaskStatus.ALL) {
      return tasks;
    }
    return status === TaskStatus.DONE
      ? tasks.filter((task) => task.done)
      : tasks.filter((task) => !task.done);
  }
}
