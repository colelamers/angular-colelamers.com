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
// todo 1; add items to local storage upon first call so they don't need
// another sql call every time
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

// todo 1; date on right side issue still for mobile. gonna have to make it not trigger and be smaller width.
// also text in button is not wrapping.

// todo 1; also another issue is all the text is really small so that is a global issue i need to fix.