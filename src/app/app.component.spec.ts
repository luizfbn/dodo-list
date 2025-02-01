import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskStatus } from './enums/task-status.enum';

const tasksMock = [
  {
    id: 'task_1',
    name: 'Example 1',
    done: false,
  },
  {
    id: 'task_2',
    name: 'Example 2',
    done: true,
  },
  {
    id: 'task_3',
    name: 'Example 3',
    done: false,
  },
];

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should add a task', () => {
    app.addTask('Example task');

    expect(app.tasks).toHaveLength(1);
  });

  it('should remove a task', () => {
    app.tasks = [...tasksMock];
    app.removeTask(2);

    expect(app.tasks).toHaveLength(2);
  });

  it('should sort tasks', () => {
    app.tasks = [...tasksMock];
    app.sortTasks();

    expect(app.tasks[2].done).toBeTruthy();
  });

  it('should set filterTasks', () => {
    app.filterTasks(TaskStatus.DONE);

    expect(app.filterStatus).toEqual(TaskStatus.DONE);
  });

  it('should load saved tasks', () => {
    const tasks = [tasksMock[0]];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    app.loadTasks();

    expect(app.tasks).toHaveLength(tasks.length);
  });
});
