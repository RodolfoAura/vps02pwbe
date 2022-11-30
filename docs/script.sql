drop database if exists Cursos;
create database Cursos charset=utf8 collate utf8_general_ci;
use Cursos;
create table alunos(
    id integer auto_increment not null primary key,
    nome varchar(50) not null,
    nascimento varchar(50) not null
);
create table cursos(
    id integer not null primary key,
    curso varchar(50) not null,
    duracao integer not null
);
create table cursados(
    aluno integer not null,
    curso integer not null,
    data varchar(50) not null,
    foreign key (aluno) references alunos(id),
    foreign key (curso) references cursos(id)
);
LOAD DATA INFILE 'C:/Users/DES/Desktop/Prova30-11/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'C:/Users/DES/Desktop/Prova30-11/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
LOAD DATA INFILE 'C:/Users/DES/Desktop/Prova30-11/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;