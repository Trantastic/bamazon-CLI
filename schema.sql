CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE inventory(
	id INT NOT NULL AUTO_INCREMENT,
	products VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NULL,
	price DECIMAL(8,2) NULL,
	stock_quantity INT NULL,

	PRIMARY KEY (id)
);

INSERT INTO inventory (products, department_name, price, stock_quantity)

VALUES 
("Settlers of Catan", "Games", 40, 20), 
("Monopoly Deal", "Games", 12.99, 20),
("Dragon Fruit", "Fruit", 0.99, 150),
("Mango", "Fruit", 1.99, 10),
("Finding Dory", "DVD", 5.99, 60),
("Toy Story 3", "DVD", 5.99, 45),
("Firefly", "DVD", 10.99, 9.99),
("The Brave Little Toaster", "DVD", 11.99, 5),
("1995 Honda Rebel", "USED Vehicles", 999, 1),
("2001 Kawasaki Ninja 250cc", "USED Vehicles", 2500, 3);