import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'theme-switch',
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
  @Input() checked = false;
  @Output() onClick = new EventEmitter<boolean>();

  handleClick() {
    this.onClick.emit(this.checked);
  }
}
