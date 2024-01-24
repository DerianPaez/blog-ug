import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogUrl = 'https://localhost:7242/api/Post';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.blogUrl);
  }

  getBlog(id: number) {
    return this.http.get<any>(`${this.blogUrl}/${id}`);
  }

  createBlog(blogData: { title: string; content: string }) {
    return this.http.post<any>(this.blogUrl, blogData);
  }

  // updateBlog(id: string, blogData: { title: string; content: string }) {
  //   return this.http.put<any>(`${this.blogUrl}/${id}`, blogData);
  // }

  // deleteBlog(id: string) {
  //   return this.http.delete<any>(`${this.blogUrl}/${id}`);
  // }

  // likeBlog(id: string) {
  //   return this.http.put<any>(`${this.blogUrl}/like/${id}`, {});
  // }

  // unlikeBlog(id: string) {
  //   return this.http.put<any>(`${this.blogUrl}/unlike/${id}`, {});
  // }

  // createComment(id: string, commentData: { content: string }) {
  //   return this.http.post<any>(`${this.blogUrl}/comment/${id}`, commentData);
  // }

  // deleteComment(blogId: string, commentId: string) {
  //   return this.http.delete<any>(
  //     `${this.blogUrl}/comment/${blogId}/${commentId}`
  //   );
  // }

  // updateComment(
  //   blogId: string,
  //   commentId: string,
  //   commentData: { content: string }
  // ) {
  //   return this.http.put<any>(
  //     `${this.blogUrl}/comment/${blogId}/${commentId}`,
  //     commentData
  //   );
  // }

  // getComments(id: string) {
  //   return this.http.get<any>(`${this.blogUrl}/comment/${id}`);
  // }

  // getLikes(id: string) {
  //   return this.http.get<any>(`${this.blogUrl}/like/${id}`);
  // }

  // getBlogByUserId(id: string) {
  //   return this.http.get<any>(`${this.blogUrl}/user/${id}`);
  // }
}
