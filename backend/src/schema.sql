
CREATE DATABASE "db_blog"

create table if not exists users (
    id serial primary key unique,
    nome varchar(60) not null,
    email varchar(60) not null unique,
    senha text not null
);


create table if not exists posts (
    id serial NOT NULL,
    titulo character varying(60) NOT NULL,
    descricao text NOT NULL,
    autor integer NOT NULL,
    publicacao timestamp without time zone NULL,
  	foreign key (autor) references users(id)
);

