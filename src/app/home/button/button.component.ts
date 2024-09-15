import { Component, Input, Output } from '@angular/core';
import { ButtonInfo } from '../objects/buttoninfo';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() pageButtons!: ButtonInfo;
}
