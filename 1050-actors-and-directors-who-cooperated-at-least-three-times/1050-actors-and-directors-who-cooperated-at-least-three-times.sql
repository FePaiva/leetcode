# Write your MySQL query statement below

# SELECT A.actor_id, A.director_id
# FROM ActorDirector A 
# JOIN ActorDirector B 
# ON A.timestamp = B.timestamp
# WHERE A.actor_id = B.actor_id AND A.director_id = B.director_id
# HAVING COUNT(A.actor_id) >= 3 AND COUNT(A.director_id) >= 3;

SELECT actor_id, director_id
FROM ActorDirector
GROUP BY actor_id, director_id
HAVING COUNT(*) >= 3;