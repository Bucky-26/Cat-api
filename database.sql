CREATE DATABASE IF NOT EXISTS catdb;

USE catdb;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS catinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    breed VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES ('testuser', 'testpassword');

INSERT INTO catinfo (breed, name) VALUES 
('Siamese', 'Whiskers'),
('Persian', 'Fluffy'),
('Maine Coon', 'Shadow');
--- love you all