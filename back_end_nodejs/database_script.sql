-- create database
create database nl2c;
use nl2c;

-- create table 
create table users(
  id INT AUTO_INCREMENT, 
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL, 
  role VARCHAR(10) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

-- select all
select * from users;

-- insert new row
INSERT INTO `users` (`username`, `password`, `role`, `email`)
VALUES ('hson', '123123', 'ADMIN', 'hson@gmail.com');

-- update
UPDATE `nl2c`.`users` SET `role` = 'ADMIN' WHERE (`id` = '1');

































