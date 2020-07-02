DROP DATABASE IF EXISTS burgers_db;

CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;
