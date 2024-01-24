export type Post = {
  id: string;
  category: string;
  title: string;
  date: string;
  desc: string;
  img: string;
  content: string;
};

export type PostCard = Omit<Post, 'content'>;

export type ResponsePost = {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  fechaPublicacion: Date;
  usuarioId: number;
  usuario: any;
  comentarios: any;
  categorias: ResponseCategory[];
};

export type ResponseCategory = {
  id: number;
  nombre: string;
};
