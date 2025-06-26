
CREATE TABLE Customers (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    Age          NUMBER,
    Balance      NUMBER(10, 2),
    IsVIP        CHAR(1) DEFAULT 'N'
);

CREATE TABLE Loans (
    LoanID       NUMBER PRIMARY KEY,
    CustomerID   NUMBER REFERENCES Customers(CustomerID),
    InterestRate NUMBER(5,2),
    DueDate      DATE
);

COLUMN CustomerID FORMAT 9999
COLUMN Name FORMAT A15
COLUMN Age FORMAT 99
COLUMN Balance FORMAT 999999.99
COLUMN IsVIP FORMAT A3

COLUMN LoanID FORMAT 9999
COLUMN CustomerID FORMAT 9999
COLUMN InterestRate FORMAT 99.99
COLUMN DueDate FORMAT A11


INSERT INTO Customers VALUES (1, 'Sunil', 65, 15000, 'N');
INSERT INTO Customers VALUES (2, 'Aarti', 45, 8000, 'N');
INSERT INTO Customers VALUES (3, 'Rahul', 61, 12000, 'N');
INSERT INTO Customers VALUES (4, 'Priya', 30, 9500, 'N');

INSERT INTO Loans VALUES (101, 1, 9.5, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 11.0, SYSDATE + 45);
INSERT INTO Loans VALUES (103, 3, 10.0, SYSDATE + 5);
INSERT INTO Loans VALUES (104, 4, 12.5, SYSDATE + 28);

SELECT * FROM Customers;
SELECT * FROM Loans;


COMMIT;
BEGIN
  FOR cust IN (
    SELECT c.CustomerID, l.LoanID
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE LoanID = cust.LoanID;
  END LOOP;

  COMMIT;
END;
/
BEGIN
  FOR cust IN (
    SELECT CustomerID
    FROM Customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'Y'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;

  COMMIT;
END;
/


SELECT * FROM Customers;
SELECT * FROM Loans;
