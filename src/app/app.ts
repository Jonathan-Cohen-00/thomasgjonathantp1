import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Carre } from './carre/carre';

// Composant racine : assemble le header, le carré central et le footer de la page
@Component({
  selector: 'app-root',
  imports: [Header, Footer, Carre],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('thomasgjonathan');
}
