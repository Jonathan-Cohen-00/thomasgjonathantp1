import { Component } from '@angular/core';
import { PartLogo } from '../part-logo/part-logo';

// Composant Carre : affiche le carré de 400px avec sa bordure noire
@Component({
  selector: 'app-carre',
  imports: [PartLogo],
  templateUrl: './carre.html',
  styleUrl: './carre.scss',
})
export class Carre {}
