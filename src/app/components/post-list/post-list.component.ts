import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { PostCard, ResponsePost } from '../../models/blog.model';
import formatDateToUI from '../../utils/date-utils';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts: PostCard[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getBlogs().subscribe({
      next: (data: ResponsePost[]) => {
        this.posts = data.map((post) => ({
          id: post.id.toString(),
          category: post.categorias?.[0]?.nombre ?? '',
          title: post.titulo,
          date: formatDateToUI(post.fechaPublicacion.toString()),
          desc: post.descripcion,
          img: post.imagen,
        }));
      },
      error: (error) => {
        console.error('Error al obtener posts', error);
        alert(
          'Error al obtener posts desde el servidor, recargue la página e intente más tarde.'
        );
      },
    });
  }
}
