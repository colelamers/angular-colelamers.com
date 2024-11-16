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
  isLoading: boolean = true; // Flag to show/hide loading indicator
  constructor() 
  {
    this.blogService.getAllBlogPosts().subscribe((allBlogs: BlogInfo[]) => {
      this.blogs = allBlogs;
    })
  }

  ngOnInit(): void {
    this.loadBlogItems();
  }

  loadBlogItems(): void {
    this.isLoading = true;  // Set loading to true while fetching data
    this.blogService.getAllBlogPosts().subscribe((allBlogs: BlogInfo[]) => {
      this.blogs = allBlogs;
      this.isLoading = false;  // Set loading to false even on error
    })
  }
}
