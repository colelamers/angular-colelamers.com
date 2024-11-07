import { Injectable } from '@angular/core';
import { BlogInfo } from '../objects/BlogInfo';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor() { }
    commonPath: string = "/assets/images/";
    protected blogList: BlogInfo[] =
    [
      {
        id: 1,
        title: "test 1",
        hasImages: true,
        blogTextPath: "sdfg",
        fileName: "test.txt"
      },
      {
        id: 2,
        title: "test 2",
        hasImages: true,
        blogTextPath: "f2f323",
        fileName: "test.txt"
      },
      {
        id: 3,
        title: "test 3",
        hasImages: true,
        blogTextPath: "dsafg",
        fileName: "test.txt"
      },
    ];
  getAllBlogs(): BlogInfo[] {
    return this.blogList;
  }
  getBlogById(id: number): BlogInfo {
    return this.blogList.find((blogList) => blogList.id === id)!;
  }
}
