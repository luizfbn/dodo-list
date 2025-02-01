import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSwitchComponent } from './theme-switch.component';

describe('ThemeSwitchComponent', () => {
  let component: ThemeSwitchComponent;
  let fixture: ComponentFixture<ThemeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handleClick() on click checkbox', () => {
    jest.spyOn(component, 'handleClick');
    const checkbox = fixture.debugElement.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement;
    checkbox.click();

    expect(component.handleClick).toHaveBeenCalled();
  });
});
