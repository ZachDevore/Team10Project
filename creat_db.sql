CREATE TABLE CUSTOMERS (
    CustomerID INT PRIMARY KEY NOT NULL,
    CustomerName VARCHAR(255) NOT NULL,
    CustomerAddress VARCHAR(255) NOT NULL,
    CustomerPhone VARCHAR(20) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

CREATE TABLE ORDERS (
    OrderID INT PRIMARY KEY NOT NULL,
    CustomerID INT NOT NULL,
    OrderDate DATE NOT NULL,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS (CustomerID)
);

CREATE TABLE PRODUCTS (
    ProductID INT PRIMARY KEY NOT NULL,
    ProductName VARCHAR(255) NOT NULL,
    ProductPrice FLOAT NOT NULL,
    ProductDescription VARCHAR(255) NOT NULL
);

CREATE TABLE INVENTORY (
    InventoryID INT PRIMARY KEY NOT NULL,
    ProductID INT NOT NULL,
    InventoryCount INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES PRODUCTS (ProductID)
);

CREATE TABLE RETURNS (
    ReturnID INT PRIMARY KEY NOT NULL,
    OrderID INT NOT NULL,
    ReturnDate DATE NOT NULL,
    ReturnReason VARCHAR(255) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES ORDERS (OrderID)
);

CREATE TABLE CATEGORIES (
    CategoryID INT PRIMARY KEY NOT NULL,
    CategoryName VARCHAR(255) NOT NULL
);

CREATE TABLE DEALS (
    DealID INT PRIMARY KEY NOT NULL,
    ProductID INT NOT NULL,
    CategoryID INT NOT NULL,
    DealDescription VARCHAR(255) NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES PRODUCTS (ProductID),
    FOREIGN KEY (CategoryID) REFERENCES CATEGORIES (CategoryID)
);


INSERT INTO CUSTOMERS (CustomerID, CustomerName, CustomerAddress, CustomerPhone, Password)
VALUES
(1, 'John Doe', '123 Main St', '555-555-5555', 'password1'),
(2, 'Jane Doe', '456 Elm St', '555-555-5556', 'password2'),
(3, 'Bob Smith', '789 Oak St', '555-555-5557', 'password3'),
(4, 'Sally Johnson', '246 Pine St', '555-555-5558', 'password4');

INSERT INTO ORDERS (OrderID, CustomerID, OrderDate)
VALUES (1, 1, '2022-12-01'),
       (2, 2, '2022-12-02'),
       (3, 3, '2022-12-03'),
       (4, 4, '2022-12-04');

INSERT INTO PRODUCTS (ProductID, ProductName, ProductPrice, ProductDescription)
VALUES (1, 'Laptop', 999.99, 'Dell Laptop'),
       (2, 'TV', 499.99, 'Samsung Smart TV'),
       (3, 'Smartphone', 799.99, 'Apple iPhone'),
       (4, 'Tablet', 399.99, 'iPad');

INSERT INTO INVENTORY (InventoryID, ProductID, InventoryCount)
VALUES (1, 1, 20),
       (2, 2, 15),
       (3, 3, 25),
       (4, 4, 10);

INSERT INTO RETURNS (ReturnID, OrderID, ReturnDate, ReturnReason)
VALUES (1, 1, '2022-12-05', 'Defective product'),
       (2, 2, '2022-12-06', 'Wrong product received'),
       (3, 3, '2022-12-07', 'Changed mind'),
       (4, 4, '2022-12-08', 'Not satisfied with product');

INSERT INTO CATEGORIES (CategoryID, CategoryName)
VALUES (1, 'Electronics'),
       (2, 'Furniture'),
       (3, 'Clothing'),
       (4, 'Sports');

INSERT INTO DEALS (DealID, ProductID, CategoryID, DealDescription)
VALUES (1, 1, 1, 'Get a discount on laptops'),
       (2, 2, 1, 'TVs on sale'),
       (3, 3, 1, 'Smartphones at a discounted price'),
       (4, 4, 1, 'Tablets at a reduced price');






  
  
  


