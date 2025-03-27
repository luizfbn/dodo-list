import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'app-header',
  imports: [ThemeSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}
}
