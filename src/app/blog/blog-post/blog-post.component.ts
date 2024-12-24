import { Component, OnInit, inject, ɵ_sanitizeHtml } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { BlogService } from '../services/blog.service';
import { BlogInfo } from '../objects/BlogInfo';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, BlogPostComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  blogId: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  blogById!: BlogInfo;
  isLoading: boolean = true; // Flag to show/hide loading indicator
  safeHtmlContent!: SafeHtml;

  constructor(
    private blogService: BlogService,
    private sanitizer: DomSanitizer
  ) {
    this.blogId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.isLoading = true;
    this.blogService.getBlogById(this.blogId).subscribe(
      (currentBlog: any) => {
        this.blogById = currentBlog;
        // Sanitize and store the HTML content safely
        this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(currentBlog.html);
        this.isLoading = false;
      }
    );
  }
  
  getDateYYMMDD(): string {
    // todo 1; try to figure out how to consolidate these
    // getDay returns the day of the week with a number
    // getDate returns the day number of the month
    let dateSplitString: number[] = this.blogById.date.split("-")
                                                      .map(n => Number.parseInt(n));
    let year = dateSplitString[0].toString();
    let month = dateSplitString[1].toString();
    let day = dateSplitString[2].toString();
    
    if (month.length < 2){
      month = `0${month}`;
    }
    if (day.length < 2){
      day = `0${day}`;
    }
    
    return `${year}-${month}-${day}`;
  }
}

