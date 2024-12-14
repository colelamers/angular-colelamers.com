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
    // todo 1; get like a 2 second loading screen?
    this.loadBlogItems();
  }

  loadBlogItems(): void {
    // Set loading to true while fetching data
    this.isLoading = true;
    this.blogService.getAllBlogPosts().subscribe((allBlogs: BlogInfo[]) => {
      this.blogs = allBlogs;
      // Set loading to false even on error
      this.isLoading = false;
    })
  }
}
