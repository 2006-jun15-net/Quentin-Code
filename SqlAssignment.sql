CREATE Schema Assignment
go 
Create TABLE Products (
    ID int PRIMARY KEY IDENTITY (1,1) NOT NULL,
    Name nvarchar(255) NOT NULL,
    Price Money,
);

Create TABLE Customers (
    ID int PRIMARY KEY IDENTITY (1,1) NOT NULL,
    Firstname nvarchar(255) NOT NULL,
    Lastname nvarchar(255) NOT NULL,
    Cardnumber nvarchar(19) NOT NULL UNIQUE
);
Create TABLE Orders(
    ID int IDENTITY (1,1),
    ProductID int Foreign key(ProductID) References Products,
    CustomerID int Foreign key(CustomerID) References Customers,
    Primary Key(ProductID, CustomerID)
);
Insert into Customers (Firstname, Lastname, CardNumber)
Values 
('Tom', 'Jones', 111111111111),
('Bill', 'Jones', 211111111111),
('Phill', 'Jones', 311111111111)

Insert into Products (Name, Price)
Values 
('Product 1', 100.00),
('Product 2', 1000.00),
('Product 3', 500.00)

Insert into Orders (ProductID, CustomerID)
Values 
(1, 1),
(2, 2),
(3, 3)

Insert into Products (Name, Price)
Values ('iPhone', 200.00)

Insert into Customers (Firstname, Lastname, Cardnumber)
values ('Tina', 'Smith', 22221112211)

Insert Into [Orders] (CustomerID, ProductID)
values (4, 4)

Select SUM(p.Price) as 'Total iPhone Revenue'
from Orders o
Left join Products p on p.ID=o.ProductId
where p.Name = 'iPhone'

UPDATE Products
SET price = 250
WHERE name = 'iPhone'