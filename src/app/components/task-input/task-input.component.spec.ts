import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskInputComponent } from './task-input.component';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TaskInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable submit button on empty input value', () => {
    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;

    expect(button.disabled).toBeTruthy();
  });

  it('should disable submit button on empty space input value', () => {
    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;
    const input = fixture.debugElement.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    input.value = ' ';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(button.disabled).toBeTruthy();
  });

  it('should handleSubmit() on click button', () => {
    jest.spyOn(component, 'handleSubmit');
    const input = fixture.debugElement.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    input.value = 'Example task';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector(
      'button'
    ) as HTMLButtonElement;
    button.click();

    expect(component.handleSubmit).toHaveBeenCalled();
  });
});
