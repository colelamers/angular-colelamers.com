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
        fileName: "../../../blogPostData/test.txt",
        date: new Date(2020, 1, 1)
      },
      {
        id: 2,
        title: "test 2",
        hasImages: true,
        blogTextPath: "f2f323",
        fileName: "test.txt",
        date: new Date(1999, 5, 31)
      },
      {
        id: 3,
        title: "test 3",
        hasImages: true,
        blogTextPath: "dsafg",
        fileName: "test.txt",
        date: new Date(2024, 11, 7)
      },
    ];
  getAllBlogs(): BlogInfo[] {
    return this.blogList;
  }
  getBlogById(id: number): BlogInfo {
    return this.blogList.find((blogList) => blogList.id === id)!;
  }
}
