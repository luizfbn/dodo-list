import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'task-input',
  imports: [ReactiveFormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css',
})
export class TaskInputComponent {
  @Output() onSubmit = new EventEmitter<string>();

  taskInputForm = new FormGroup({
    task: new FormControl('', [
      Validators.required,
      this.noWhitespaceValidator,
    ]),
  });

  handleSubmit() {
    this.onSubmit.emit(this.taskInputForm.value.task?.trim());
    this.taskInputForm.reset();
  }

  noWhitespaceValidator(control: FormControl): ValidationErrors | null {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  }
}
