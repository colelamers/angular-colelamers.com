import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonService } from './services/buttons.service';
import { ButtonInfo } from './objects/buttoninfo';
import { QuoteComponent } from './quote/quote.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuoteComponent],
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent {
  buttonService: ButtonService = inject(ButtonService);
  buttons: ButtonInfo[] = [];
  
  constructor() {
    this.buttons = this.buttonService.getAllButtons();
  }
}
