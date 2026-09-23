import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-part-logo',
  imports: [NgClass],
  templateUrl: './part-logo.html',
  styleUrl: './part-logo.scss',
})
export class PartLogo {
  @Input() color: string = ''; // PARENT --> ENFANT
  @Output() selectColor = new EventEmitter<string>(); // ENFANT --> PARENT

  onPartClick(): void {
    this.selectColor.emit(this.color);
  }
}
