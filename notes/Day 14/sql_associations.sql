-- DROP TABLE 
-- \c yogeshverma

--delete the existing sql_lab database
-- DROP DATABASE sql_lab 

--run the sql_lab.sql file.
-- \i sql_lab.sql 

-- find project with student id of 2
SELECT * FROM projects WHERE student_id=2;

-- get scores from enrolments with id of 1
SELECT * FROM enrolments WHERE id=1;

/* INNER JOIN 
  Join two associated tables ON a common column.*/

/* CROSS JOIN
  Cross product of two tables. 
  Connects every combination possible. */

/* LEFT JOIN 
  for ex if there are two columns of people enrolled in one or two subjects.
  INNNER JOIN gives the students that are enrolled in the first subjects */

/* OUTER JOIN 
  gives students enrolled in either the first or the second but not both */


SELECT last_name, first_name, projects.title FROM students 
INNER JOIN projects ON students.id = projects.student_id 
ORDER BY projects.title;


/* Select all students enrolled in courses containing the word 'matrix'
 Now, since students and courses tables are not linked we need to find a way to connect them
 Enrolments table contains both student_id and course_id. Therefore, we inner join the three of them
 and find the title. Note that since enrolments contains both courses and student, it acts as a bridge
 and is put in the middle. */ 
SELECT title, first_name, last_name FROM courses 
INNER JOIN enrolments on courses.id = enrolments.course_id 
INNER JOIN students ON enrolments.student_id = students.id 
WHERE title ILIKE '%matrix%';

SELECT courses.title, first_name, enrolments.score FROM students 
INNER JOIN enrolments ON students.id = enrolments.student_id 
INNER JOIN courses ON enrolments.course_id = courses.id
WHERE first_name ILIKE 'Jo%';