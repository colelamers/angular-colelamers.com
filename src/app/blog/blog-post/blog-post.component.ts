import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BlogService } from '../services/blog.service';
import { BlogInfo } from '../objects/BlogInfo';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blogLocation: BlogInfo;
  constructor() {
    const blogId = Number(this.route.snapshot.params['id']);
    this.blogLocation = this.blogService.getBlogById(blogId);
  }
}
