import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.id = 1;
    component.task = {
      id: 'task_id',
      name: 'Example task',
      done: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task name', async () => {
    const span = fixture.debugElement.nativeElement.querySelector(
      'span'
    ) as HTMLSpanElement;

    expect(span.textContent).toContain(component.task.name);
  });

  it('should change value on click checkbox', () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    checkbox.click();

    expect(component.task.done).toBeTruthy();
  });

  it('should handleCheck() on click checkbox', () => {
    jest.spyOn(component, 'handleCheck');
    const checkbox = fixture.debugElement.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    checkbox.click();

    expect(component.handleCheck).toHaveBeenCalled();
  });

  it('should handleDelete() on click button', () => {
    jest.spyOn(component, 'handleDelete');
    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;
    button.click();

    expect(component.handleDelete).toHaveBeenCalled();
  });
});
