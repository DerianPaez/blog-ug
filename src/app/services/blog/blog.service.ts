import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPost } from 'src/app/models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogUrl = 'https://localhost:7242/api/Post';
  private imageUrl = 'https://localhost:7242/api/Image/upload-image';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any> {
    return this.http.get<any>(this.blogUrl);
  }

  getBlogsByUserAuthenticated(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<any>(`${this.blogUrl}/by-user`, httpOptions);
  }

  getBlog(id: number) {
    return this.http.get<any>(`${this.blogUrl}/${id}`);
  }

  uploadImage(image: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<any>(this.imageUrl, formData, httpOptions);
  }

  createBlog(blogData: RequestPost) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post<any>(this.blogUrl, blogData, httpOptions);
  }

  deleteBlog(postId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.delete<any>(`${this.blogUrl}/${postId}`, httpOptions);
  }

  updateBlog(postId: string, blogData: RequestPost) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.put<any>(
      `${this.blogUrl}/${postId}`,
      blogData,
      httpOptions
    );
  }
}
