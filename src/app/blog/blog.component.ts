import { Component, inject,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services/blog.service';
import { BlogInfo } from './objects/BlogInfo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogService: BlogService = inject(BlogService);
  blogs: BlogInfo[] = [];
  isLoading: boolean = true; // Flag to show/hide loading indicator
  constructor() 
  {
    this.isLoading = true;
  }

  ngOnInit(): void {
    // Fetch all blogs
    this.blogService.getBlogTitles().subscribe({
      next: (allBlogs: BlogInfo[]) => {
        this.blogs = allBlogs;
        this.isLoading = false; // Loading complete
      },
      error: (err) => {
        console.error('Error fetching blog posts:', err);
        this.isLoading = false; // Loading complete even on error
      }
    });
  }
}