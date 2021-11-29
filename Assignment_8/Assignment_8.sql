--Part A
--1.Select the movie names, domestic takings and international takings for all movies with either missing domestic takings or missing international takings and order the results by movie name.
SELECT m.movie_name, r.domestic_takings, r.international_takings
FROM movies m
JOIN movie_revenues r
ON m.movie_id=r.movie_id
WHERE r.domestic_takings IS NULL OR r.international_takings IS NULL
ORDER BY m.movie_name ASC

--2.Which director has the highest total domestic takings
SELECT d.first_name, d.last_name, SUM(r.domestic_takings) AS total_domestic
FROM directors d
JOIN movies m ON d.director_id=m.director_id
JOIN movie_revenues r ON m.movie_id=r.movie_id
GROUP BY d.first_name, d.last_name
HAVING SUM(r.domestic_takings) IS NOT NULL
ORDER BY total_domestic DESC
LIMIT 1;

--Part B
--1.Select the first names, last names and date of birth from directors and actors. Order the results by the date of birth.
SELECT first_name, last_name, date_of_birth FROM actors
UNION
SELECT first_name, last_name, date_of_birth FROM directors
ORDER BY date_of_birth 

--2.Select the first and last names of all directors and actors born in the 1960s. Order the result by last name.
SELECT first_name, last_name FROM directors 
WHERE date_of_birth BETWEEN '1960-01-01' AND '1969-12-31' 
UNION
SELECT first_name, last_name FROM actors 
WHERE date_of_birth BETWEEN '1960-01-01' AND '1969-12-31' 
ORDER BY last_name

--Part C
--1.Select the first name, last name, and date of birth for the oldest actors of each gender.
SELECT first_name, last_name, date_of_birth FROM actors
WHERE date_of_birth = (SELECT MIN(date_of_birth) from actors
					   WHERE gender = 'F')
UNION
SELECT first_name, last_name, date_of_birth FROM actors
WHERE date_of_birth = (SELECT MIN(date_of_birth) from actors
					   WHERE gender = 'M')
					   
--2.Select the movie name, movie length and age certificate for movies with an above average length for their age certificate.
SELECT movie_name, movie_length, age_certificate FROM movies
WHERE movie_length > (SELECT AVG (movie_length) FROM movies);
