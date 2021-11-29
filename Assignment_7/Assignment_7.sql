--Part A
SELECT COUNT(*) FROM actors
UNION ALL
SELECT COUNT(*) FROM directors
UNION ALL
SELECT COUNT(*) FROM movies
UNION ALL
SELECT COUNT(*) FROM movie_revenues
UNION ALL
SELECT COUNT(*) FROM movies_actors

--Part B
--1.Select the movie_name and release_date of every movie
SELECT movie_name, release_date FROM movies;

--2.Select the first and last names of all American directors.
SELECT first_name, last_name 
FROM directors
WHERE nationality = 'American'

--3.Select all male actors born after the 1st of January 1970.
SELECT first_name, last_name
FROM actors
WHERE gender = 'M' AND date_of_birth > '01-01-1970'

--4. Select the names of all movies which are over 90 minutes long and movie language is Tnglish.
SELECT movie_name
FROM movies
WHERE movie_length > '90' AND movie_lang = 'English'

--Part C
--1.Select the movie names and movie language of all movies with a movie language of English, Spanish or Korean.
SELECT movie_name, movie_lang
FROM movies
WHERE movie_lang = 'English' OR movie_lang = 'Spanish' OR movie_lang = 'Korean'

--2.Select the first and last names of the actors whose last name begins with M and were born between 01/01/1940 and 31/12/1969.
SELECT first_name, last_name
FROM actors
WHERE last_name LIKE 'M%' AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31'

--3.Select the first and last names of the directors with nationality of British, French or German born between 01/01/1950 nad 31/12/1980
SELECT first_name, last_name
FROM directors
WHERE nationality = 'British' OR nationality = 'French'OR nationality = 'German' 
INTERSECT
SELECT first_name, last_name
FROM directors
WHERE date_of_birth BETWEEN '1950-01-01' AND '1980-12-31'
ORDER BY last_name ASC
