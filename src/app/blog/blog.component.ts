import { Component, inject, Input } from '@angular/core';
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
    this.blogService.getAllBlogPosts().subscribe((allBlogs: BlogInfo[]) => {
      this.blogs = allBlogs;
    })
    // todo 1; need to perform a check here to verify the session storage count
    // with the constructor data retrieval count. if constructor > || < onINit,
    // then put init data there
  }

  ngOnInit(): void {
    // Display a loading screen while fetching data
    this.isLoading = true;

    // Check if blogs are already in sessionStorage
    const cachedBlogs: string | null = window.sessionStorage.getItem('blogs');
    
    // Fetch blogs until data returns
    if (cachedBlogs) {
      // Use cached data
      this.blogs = JSON.parse(cachedBlogs);
      this.isLoading = false; // Loading complete
    } else {
      // Fetch data from the service if not in sessionStorage
      this.blogService.getAllBlogPosts().subscribe({
        next: (allBlogs: BlogInfo[]) => {
          this.blogs = allBlogs;

          // Store the fetched blogs in sessionStorage
          sessionStorage.setItem('blogs', JSON.stringify(allBlogs));

          this.isLoading = false; // Loading complete
        },
        error: (err) => {
          console.error('Error fetching blog posts:', err);
          this.isLoading = false; // Loading complete even on error
        }
      });
    }
  }

  getBlogDate(date: string): string {
    // getDay returns the day of the week with a number
    // getDate returns the day number of the month
    let dateSplitString: number[] = date.split("-").map(n => Number.parseInt(n));
    let year: string = dateSplitString[0].toString();
    let month: string = dateSplitString[1].toString();
    let day: string = dateSplitString[2].toString();

    let n: Date = new Date;
    if (month.length < 2) {
      month = `0${month}`;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }

    return `${year} ${this.getMonth(month)!.substring(0, 3)} ${day}`;
  }

  private getMonth(monthNum: string): string | null {
    if (monthNum === null || monthNum === undefined){
      return null;
    }

    if (monthNum.length > 1 && monthNum[0] === "0"){
      monthNum = monthNum[1]; // get 2nd index value
    }

    switch(monthNum){
      case "1":
        return "January";
      case "2":
        return "February";
      case "3":
        return "March";
      case "4":
        return "April";
      case "5":
        return "May";
      case "6":
        return "June";
      case "7":
        return "July";
      case "8":
        return "August";
      case "9":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
        default: 
          return null;
    }

  }
}