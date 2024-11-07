import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogButtonComponent } from './blog-button/blog-button.component';
import { BlogService } from './services/blog.service';
import { BlogInfo } from './objects/BlogInfo';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogButtonComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})

export class BlogComponent {
  blogService: BlogService = inject(BlogService);
  blogs: BlogInfo[] = [];

  constructor() {
    this.blogs = this.blogService.getAllBlogs();
  }
}