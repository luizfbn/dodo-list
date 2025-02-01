import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  localStorage.setItem('theme', 'dark');

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set theme', () => {
    service.setTheme('light');

    expect(service.themeSignal()).toEqual('light');
  });

  it('should update theme', () => {
    service.updateTheme();

    expect(service.themeSignal()).toEqual('light');
  });

  it('should get saved theme', () => {
    expect(service.themeSignal()).toEqual('dark');
  });
});
