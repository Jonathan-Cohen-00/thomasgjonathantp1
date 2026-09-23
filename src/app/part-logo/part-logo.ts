import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-part-logo',
  imports: [NgClass],
  templateUrl: './part-logo.html',
  styleUrl: './part-logo.scss',
})
export class PartLogo {
  @Input() color: string = ''; // PARENT --> ENFANT
}
