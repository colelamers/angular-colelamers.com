import { Injectable } from '@angular/core';
import { BlogInfo } from '../objects/BlogInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  commonPath: string = "/assets/images/";
  portLocation: string = "1234/";
  // todo 1; i want to change this so that i just need to update a json file
  // or something everytime instead of needing to rebuild the whole app. 
  // i want to just drag and drop my new stuff.
  protected blogList: BlogInfo[] =
    [
      {
        id: 1,
        title: "First Post",
        fileName: "0001firstpost.html",
        date: new Date(2024, 11, 8)
      },
    ];
  getAllBlogs(): BlogInfo[] 
  {
    return this.blogList;
  }
  getBlogById(id: number): BlogInfo 
  {
    return this.blogList.find((blogList) => blogList.id === id)!;
  }

}
