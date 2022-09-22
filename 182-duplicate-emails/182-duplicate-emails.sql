# Write your MySQL query statement below
SELECT email 
FROM Person
group by 1
having count(*) > 1