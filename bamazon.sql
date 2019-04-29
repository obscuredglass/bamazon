DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50),
department_name VARCHAR(50),
price DECIMAL(10,2) NULL,
stock_quantity INTEGER(11),
PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Garnier Fructis Shampoo", "Bathroom", 8.25, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Baseball Bat", "Sports", 20.15, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Basketball", "Sports", 15.55, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Icepacks", "Medical", 4.45, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Advil", "Medical", 8.25, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Superman Doll", "Toy", 12.35, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("M&M Super Size Bag", "Candy", 5, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Eyeliner", "Makeup", 12.95, 9);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("James Patterson Novel", "Misc", 10, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ("Batman Doll", "Toy", 11.11, 23);