import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../home/button/button.component';
import { ButtonService } from '../home/services/buttons.service';
import { ButtonInfo } from '../home/objects/buttoninfo';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  buttonService: ButtonService = inject(ButtonService);
  buttons: ButtonInfo[] = [];

  constructor() {
    //this.buttons = this.buttonService.getAllButtons();
  }
}
