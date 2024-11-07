import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BlogService } from '../services/blog.service';
import { BlogInfo } from '../objects/BlogInfo';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blogLocation: BlogInfo;
  htmlContent: string = '';

  constructor(private http: HttpClient) {
    const blogId = Number(this.route.snapshot.params['id']);
    this.blogLocation = this.blogService.getBlogById(blogId);
    
    // This requires HttpClientModule to be imported in order for it to work
    this.http
      .get(this.blogLocation.fileName, { responseType: 'text' })
      .subscribe(data => {
        this.htmlContent = data;
      });
  }

  getDateYYMMDD(){
    let month = this.blogLocation.date.getMonth().toString();
    let day = this.blogLocation.date.getDay().toString();

    if (month.length < 2){
      month = '0' + month;
    }
    if (day.length < 2){
      day = '0' + day;
    }
     return this.blogLocation.date.getFullYear() + "-" + month + "-" + day;
  }
}
