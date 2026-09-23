import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Jonathan Thomas');
  });

  it('should update background color when a part-logo is clicked', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    const redLogo = compiled.querySelector('.red') as HTMLElement;
    redLogo.click();
    fixture.detectChanges();

    expect(app.bgColor()).toBe('red');
    const main = compiled.querySelector('main') as HTMLElement;
    expect(main.style.backgroundColor).toBe('red');
  });
});
