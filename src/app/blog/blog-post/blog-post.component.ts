import { Component, OnInit, inject, ɵ_sanitizeHtml } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BlogService } from '../services/blog.service';
import { BlogInfo } from '../objects/BlogInfo';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
// todo 1; do i need this implements OnInit?
export class BlogPostComponent implements OnInit {
  blogId: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  blogById!: BlogInfo;
  htmlContent: string = '';
  isLoading: boolean = true; // Flag to show/hide loading indicator

  constructor(private blogService: BlogService, private http: HttpClient) {
    this.blogId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.loadBlogData();
  }
  
  loadBlogData(): void {
    // Set loading to true while fetching data
    // .subscribe is basically the 'async' to convert an 
    // Observable<Object> to and Object
    this.isLoading = true;
    this.blogService.getBlogById(this.blogId)
                    .subscribe((currentBlog: BlogInfo) => {
                      this.blogById = currentBlog;
                      this.htmlContent = currentBlog.html;
                      // Set loading to false on error
                      this.isLoading = false;
                    }
    );
  }

  getDateYYMMDD()
  {
    // getDay returns the day of the week with a number
    // getDate returns the day number of the month
    let dateSplitString: number[] = this.blogById.date.split("-").map(n => Number.parseInt(n));
    let tempDate = new Date(dateSplitString[0], dateSplitString[1], dateSplitString[2]);
    let month = tempDate.getMonth().toString();
    let day = tempDate.getDate().toString();

    if (month.length < 2){
      month = `0${month}`;
    }
    if (day.length < 2){
      day = `0${day}`;
    }
    
    return `${tempDate.getFullYear()}-${month}-${day}`;
  }
}
