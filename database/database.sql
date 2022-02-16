CREATE DATABASE PortafolioWEB;

USE PortafolioWEB;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(200),
    email VARCHAR(100),
    password VARCHAR(60)
);

CREATE TABLE descripciones(
    id INT PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT
);

CREATE TABLE habilidades(
    id INT PRIMARY KEY AUTO_INCREMENT,
    habilidad VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE proyectos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    proyecto VARCHAR(100),
    fecha VARCHAR(100),
    descripcion TEXT,
    repositorio VARCHAR(300)
);