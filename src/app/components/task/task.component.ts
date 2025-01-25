import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../models/task.model';

@Component({
  selector: '.task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Input({ required: true }) id!: number;
  @Output() onCheck = new EventEmitter<ITask>();
  @Output() onDelete = new EventEmitter<number>();

  handleCheck() {
    this.onCheck.emit(this.task);
  }

  handleDelete() {
    this.onDelete.emit(this.id);
  }
}
