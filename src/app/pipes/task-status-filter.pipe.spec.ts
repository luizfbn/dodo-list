import { TaskStatus } from '../enums/task-status.enum';
import { TaskStatusFilterPipe } from './task-status-filter.pipe';

const tasks = [
  {
    id: 'task_1',
    name: 'Example 1',
    done: false,
  },
  {
    id: 'task_2',
    name: 'Example 2',
    done: false,
  },
  {
    id: 'task_3',
    name: 'Example 3',
    done: true,
  },
];

describe('TaskStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TaskStatusFilterPipe();

    expect(pipe).toBeTruthy();
  });

  it('should filter all tasks', () => {
    const pipe = new TaskStatusFilterPipe();
    const filteredTasks = pipe.transform(tasks, TaskStatus.ALL);

    expect(filteredTasks).toHaveLength(3);
  });

  it('should filter todo tasks', () => {
    const pipe = new TaskStatusFilterPipe();
    const filteredTasks = pipe.transform(tasks, TaskStatus.TODO);

    expect(filteredTasks).toHaveLength(2);
  });

  it('should filter done tasks', () => {
    const pipe = new TaskStatusFilterPipe();
    const filteredTasks = pipe.transform(tasks, TaskStatus.DONE);

    expect(filteredTasks).toHaveLength(1);
  });
});
