import { Injectable } from '@angular/core';
import { BlogButton } from '../objects/BlogButton';

@Injectable({
  providedIn: 'root'
})
export class BlogButtonService {

  protected blogButtons: BlogButton[] = [
    {
      id: 1,
      hrefSrcText: "",
      fileSrcText: "file.txt",
      date: new Date(2024, 9, 22)
    }
  ];

  returnBlogButtons(): BlogButton[] {
      return this.blogButtons;
  }
  
}
