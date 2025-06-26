CREATE TABLE Accounts (
    AccountID   NUMBER PRIMARY KEY,
    CustomerID  NUMBER,
    AccountType VARCHAR2(20),
    Balance     NUMBER(12, 2)
);

CREATE TABLE Employees (
    EmpID        NUMBER PRIMARY KEY,
    Name         VARCHAR2(100),
    Department   VARCHAR2(50),
    Salary       NUMBER(10, 2),
    Performance  VARCHAR2(10)
);


COLUMN AccountID FORMAT 9999
COLUMN CustomerID FORMAT 9999
COLUMN AccountType FORMAT A10
COLUMN Balance FORMAT 999999.99


COLUMN EmpID FORMAT 9999
COLUMN Name FORMAT A10
COLUMN Department FORMAT A10
COLUMN Salary FORMAT 999999.99
COLUMN Performance FORMAT A10



INSERT INTO Accounts VALUES (101, 1, 'Savings', 10000);
INSERT INTO Accounts VALUES (102, 2, 'Current', 5000);
INSERT INTO Accounts VALUES (103, 3, 'Savings', 20000);
INSERT INTO Accounts VALUES (104, 1, 'Savings', 8000);


INSERT INTO Employees VALUES (1, 'Ravi', 'IT', 50000, 'High');
INSERT INTO Employees VALUES (2, 'Neha', 'HR', 40000, 'Medium');
INSERT INTO Employees VALUES (3, 'Amit', 'IT', 55000, 'Low');

SELECT* FROM Accounts;
SELECT* FROM Employees;

COMMIT;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (
    SELECT AccountID, Balance
    FROM Accounts
    WHERE AccountType = 'Savings'
  ) LOOP
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
  
  COMMIT;
END;
/
EXEC ProcessMonthlyInterest;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_pct / 100)
  WHERE Department = dept_name;

  COMMIT;
END;
/
EXEC UpdateEmployeeBonus('IT', 10);
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc IN NUMBER,
  to_acc   IN NUMBER,
  amount   IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  SELECT Balance INTO from_balance FROM Accounts WHERE AccountID = from_acc FOR UPDATE;

  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;

  UPDATE Accounts SET Balance = Balance - amount WHERE AccountID = from_acc;
  UPDATE Accounts SET Balance = Balance + amount WHERE AccountID = to_acc;

  COMMIT;
END;
/
EXEC TransferFunds(101, 102, 1000);
PROMPT ===== FINAL ACCOUNTS =====
SELECT * FROM Accounts;

PROMPT ===== FINAL EMPLOYEES =====
SELECT * FROM Employees;

