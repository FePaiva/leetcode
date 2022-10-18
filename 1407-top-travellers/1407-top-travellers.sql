# Write your MySQL query statement below

SELECT name, COALESCE(SUM(distance),0) AS travelled_distance
FROM Users LEFT JOIN Rides ON Users.id = Rides.user_id
GROUP BY user_id
ORDER BY travelled_distance DESC, name ASC

# The COALESCE() function returns the first non-null value in a list. In this case I assigned the NULL to be Zero.