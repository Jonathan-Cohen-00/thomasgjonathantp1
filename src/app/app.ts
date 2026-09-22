import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';

// Composant racine : assemble le header et le footer de la page
@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('thomasgjonathan');
}
