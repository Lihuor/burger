CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db.burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30),
    devoured BOOLEAN
)
