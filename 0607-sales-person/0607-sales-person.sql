# Write your MySQL query statement below

# create CTE and find sales_id for company "RED"

WITH cte AS
(SELECT sales_id
FROM Orders
LEFT JOIN Company
    ON Company.com_id = Orders.com_id
WHERE Company.name = "RED")

# get names fro SalesPerson whose sales_id did not appeared on the CTE table

SELECT name
FROM SalesPerson
WHERE sales_id NOT IN(
    SELECT DISTINCT sales_id
    FROM cte
)
