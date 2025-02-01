import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgClass } from '@angular/common';
import { TaskStatusFilterPipe } from '../../pipes/task-status-filter.pipe';
import { TaskFilterComponent } from './task-filter.component';

describe('TaskFilterComponent', () => {
  let component: TaskFilterComponent;
  let fixture: ComponentFixture<TaskFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClass, TaskStatusFilterPipe, TaskFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFilterComponent);
    component = fixture.componentInstance;
    component.tasks = [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handleClick() on click link', () => {
    jest.spyOn(component, 'handleClick');
    const a = fixture.debugElement.nativeElement.querySelector(
      'a'
    ) as HTMLLinkElement;
    a.click();

    expect(component.handleClick).toHaveBeenCalled();
  });

  it('should number all tasks', () => {
    const span = fixture.debugElement.nativeElement.querySelectorAll(
      'span'
    )[0] as HTMLSpanElement;

    expect(span.textContent).toContain('3');
  });

  it('should number todo tasks', () => {
    const span = fixture.debugElement.nativeElement.querySelectorAll(
      'span'
    )[1] as HTMLSpanElement;

    expect(span.textContent).toContain('2');
  });

  it('should number done tasks', () => {
    const span = fixture.debugElement.nativeElement.querySelectorAll(
      'span'
    )[2] as HTMLSpanElement;

    expect(span.textContent).toContain('1');
  });
});
