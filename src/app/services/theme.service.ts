import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeSignal = signal<'light' | 'dark'>('light');

  setTheme(theme: 'light' | 'dark') {
    this.themeSignal.set(theme);
  }

  updateTheme() {
    this.themeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme);
    }
    effect(() => {
      const themeSignal = this.themeSignal();
      document.body.setAttribute('data-theme', themeSignal);
      localStorage.setItem('theme', themeSignal);
    });
  }
}
