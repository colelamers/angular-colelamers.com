import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonService } from '../services/buttons.service';
import { ButtonInfo } from '../objects/buttoninfo';
import { ImageComponent } from './image/image.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteComponent } from './quote/quote.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ImageComponent, FooterComponent, QuoteComponent],
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
