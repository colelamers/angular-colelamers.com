import { Injectable } from '@angular/core';
import { BlogInfo } from '../objects/BlogInfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  commonPath: string = "/assets/images/";
  apiLocation: string = "/api/blogs";
  // Fetch all blog posts
  getAllBlogPosts(): Observable<BlogInfo[]> {
    return this.http.get<BlogInfo[]>(this.apiLocation);
  }

  // Fetch a single blog post by ID
  getBlogById(id: number): Observable<BlogInfo> {
    // todo 1; change this id value to be a different value in here
    // and in SQL because we do not want this field to be changeable in case
    // the SQL id ever changes. 
    return this.http.get<BlogInfo>(`${this.apiLocation}/${id}`);
  }
}
