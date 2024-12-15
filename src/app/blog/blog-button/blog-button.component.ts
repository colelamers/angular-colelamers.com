import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogInfo } from '../objects/BlogInfo';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-button.component.html',
  styleUrl: './blog-button.component.scss'
})
export class BlogButtonComponent {
  @Input() blogItem!: BlogInfo;
}
