import { Component, OnInit } from '@angular/core';
import {
  Post,
  PostCard,
  RequestPost,
  ResponsePost,
} from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import formatDateToUI from 'src/app/utils/date-utils';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  postList: Post[] = [];
  inEdition = false;
  postInEdition?: Post;
  initialDataState: RequestPost = {
    titulo: '',
    contenido: '',
    imagen: '',
    categoria: '',
    descripcion: '',
  };

  data: RequestPost = { ...this.initialDataState };

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.fetchPostsByUser();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.blogService.uploadImage(file).subscribe({
        next: (data) => {
          this.data.imagen = data.imageUrl;
        },
        error: (error) => {
          console.error(error);
          alert(
            `No pudimos guardar la imagen, intentalo mas tarde.\n\n${JSON.stringify(
              error.error,
              null,
              2
            )}`
          );
        },
      });
    }
  }

  onSubmit() {
    if (this.inEdition && this.postInEdition) {
      this.blogService.updateBlog(this.postInEdition.id, this.data).subscribe({
        next: (data) => {
          console.log(data);
          this.data = { ...this.initialDataState };
          this.fetchPostsByUser();
          this.inEdition = false;
        },
        error: (error) => {
          console.error(error);
          alert(
            `No pudimos guardar el post, intentalo mas tarde.\n\n${JSON.stringify(
              error.error,
              null,
              2
            )}`
          );
        },
      });
      return;
    }

    this.blogService.createBlog(this.data).subscribe({
      next: (data) => {
        console.log(data);
        this.data = { ...this.initialDataState };
        this.fetchPostsByUser();
      },
      error: (error) => {
        console.error(error);
        alert(
          `No pudimos guardar el post, intentalo mas tarde.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }

  handleDeletePost(id: string) {
    this.blogService.deleteBlog(id).subscribe({
      next: () => {
        this.fetchPostsByUser();
      },
      error: (error) => {
        console.error(error);
        alert(
          `No pudimos eliminar el post, intentalo mas tarde.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }

  handleUpdatePost(id: string) {
    const postToEdit = this.postList.find((post) => post.id === id);
    if (postToEdit) {
      this.inEdition = true;
      this.postInEdition = postToEdit;
      this.data = {
        titulo: postToEdit.title,
        contenido: postToEdit.content,
        imagen: postToEdit.img,
        categoria: postToEdit.category,
        descripcion: postToEdit.desc,
      };
    }
  }

  fetchPostsByUser() {
    this.blogService.getBlogsByUserAuthenticated().subscribe({
      next: (data: ResponsePost[]) => {
        console.log(data);
        this.postList = data.map((post) => ({
          id: post.id.toString(),
          category: post.categoria ?? '',
          title: post.titulo,
          date: formatDateToUI(post.fechaPublicacion.toString()),
          desc: post.descripcion,
          img: post.imagen,
          content: post.contenido,
        }));
      },
      error: (error) => {
        console.error(error);
        alert(
          `No pudimos obtener los posts, intentalo mas tarde.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }
}
