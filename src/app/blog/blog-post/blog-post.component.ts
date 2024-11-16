import { Component, OnInit, inject, ɵ_sanitizeHtml } from '@angular/core';
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
export class BlogPostComponent implements OnInit {
  blogId: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blogLocation: BlogInfo;
  htmlContent: string = '';

  constructor(private http: HttpClient) 
  {
    this.blogId = Number(this.route.snapshot.params['id']);
    this.blogLocation = this.blogService.getBlogById(this.blogId);
  }

  ngOnInit(): void 
  {
    // Get the ID from the route parameters
    this.route.paramMap.subscribe(params => {
      this.blogId = +params.get('id')!;
      this.loadBlogData();
    });
  }

  loadBlogData()
  {
    // This requires HttpClientModule to be imported in order for it to work
    const filePath = `../../../blogPostData/${this.blogLocation.fileName}`;
    this.http.get(filePath, { responseType: 'text' })
             .subscribe(data => {
               this.htmlContent = data;
             });
  }

  getDateYYMMDD()
  {
    // getDay returns the day of the week with a number
    // getDate returns the day number of the month
    let month = this.blogLocation.date.getMonth().toString();
    let day = this.blogLocation.date.getDate().toString();

    if (month.length < 2){
      month = `0${month}`;
    }
    if (day.length < 2){
      day = `0${day}`;
    }
    
    return `${this.blogLocation.date.getFullYear()}-${month}-${day}`;
  }
}
