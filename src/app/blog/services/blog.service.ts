import { Injectable } from '@angular/core';
import { BlogInfo } from '../objects/BlogInfo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  apiLocation: string = "/api/blogs";
  // Fetch all blog posts
  getAllBlogPosts(): Observable<BlogInfo[]> {
    // todo 1; i think i can just fetch the id value and title here,
    // then when sql fetches the id, it'll return it for the blog post.
    // that way you aren't fetching a ton of data twice
    return this.http.get<BlogInfo[]>(this.apiLocation);
  }

  // Fetch a single blog post by ID
  getBlogById(id: number): Observable<BlogInfo> {
    // todo 1; change this id value to be a different value in here
    // and in SQL because we do not want this field to be changeable in case
    // the SQL id ever changes. i want an id, but not the sql id.
    return this.http.get<BlogInfo>(`${this.apiLocation}/${id}`);
  }

  getBlogTitles(): Observable<BlogInfo[]> {
    return this.http.get<BlogInfo[]>(`${this.apiLocation}/titles`);
  }
}
