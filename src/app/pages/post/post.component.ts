import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog/blog.service';
import { Post, ResponsePost } from '../../models/blog.model';
import formatDateToUI from '../../utils/date-utils';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  postId?: number;
  post?: Post & {
    author: string;
  };

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postId = id ? +id : undefined;

    if (!this.postId) {
      alert('No se ha especificado un post para mostrar');
      return;
    }

    this.loadBlogPost(this.postId);
  }

  loadBlogPost(id: number) {
    this.blogService.getBlog(id).subscribe({
      next: (post: ResponsePost) => {
        this.post = {
          id: post.id.toString(),
          category: post.categoria ?? '',
          title: post.titulo,
          date: '',
          desc: post.descripcion,
          img: post.imagen,
          content: post.contenido,
          author: post.usuario.nombre,
        };
      },
      error: (error) => {
        console.error(`Error al obtener post: ${id}`, error);
        alert(
          `Error al obtener el post ${id} desde el servidor, intente nuevamente más tarde`
        );
      },
    });
  }
}
