CREATE DATABASE BLOGPROJECT;


USE BLOGPROJECT;


CREATE TABLE Favoritos (
		id int identity(1,1),
		contador int
)


CREATE TABLE Usuario (
	id int identity(1,1),
	nombre varchar(10),
	correo varchar(40),
	contraseña varchar(30),
	rol varchar(15)
)



CREATE TABLE Contacto (
	
	usuarioID int FOREIGN KEY  REFERENCES Usuario(id) ,
	id int identity (1,1)

)

CREATE TABLE Perfil (

	usuarioID int FOREIGN KEY  REFERENCES Usuario(id) ,
	id int identity(1,1),
	foto bit ,
	descripcion varchar(200),
	contactoID int FOREIGN KEY  REFERENCES Contacto(id)

)


CREATE TABLE Categoria (

	id int identity(1,1),
	titulo varchar(25),
	descripcion varchar(100)
)


CREATE TABLE Blog (
	id int identity(1,1),
	titulo varchar(25),
	contenido varchar(25),
	autorId int FOREIGN KEY REFERENCES Perfil(id),
	categoriaId int FOREIGN KEY REFERENCES Categoria(id),
	fechaCreacion date,
	fechaActualizacion date
)


CREATE TABLE Comentario (

	id int identity(1,1),
	nombre varchar(25),
	descripcion varchar(100),
	contenido varchar(100),
	fechaCreacion varchar(150),
	PRIMARY KEY(id)
)


CREATE TABLE Interaccion (
	id int identity (1,1),
	perfilId int FOREIGN KEY REFERENCES Perfil(id),
	comentarioId int FOREIGN KEY REFERENCES Comentario(id),
	blogId int FOREIGN KEY REFERENCES Blog(id),
)



Alter table Usuario ADD Primary key(id);

Alter table Contacto Add Primary key(id);

Alter table Perfil Add Primary key(id);

Alter table Categoria Add primary key(id);

Alter table Blog Add primary key(id);