-- create database 
create database mydb 

-- use database 
use mydb 

-- create table 
create table user(
    u_id int PRIMARY KEY,
    u_name varchar(20),
    age int DEFAULT 18)

-- Add column in table using alter command 
Alter table user add column email_id varchar(20) 

-- insert single record 
insert into user VALUES (1,'Neel',23,'neelrana6@gmail.com')

-- insert single record in the table 
insert into user (u_id,u_name,age,email_id) values (10,'pradip',23,'pradip@gmail.com')

-- insert record using null keyword
insert into user (u_id,u_name,age,email_id) values (36,'Preksha',22,null)

--insert multiple record in one query 
insert into user (u_id,u_name,age,email_id) values (26,'Rutwik',23,'rutwik@gmail.com') , (25,'Mohini',24,'Mohini@gmail.com')

-- fetching data from database 
SELECT * from user 

-- use order by 
SELECT * from user ORDER BY age 

-- use order by descending order 
SELECT * from user ORDER BY age DESC

-- select disinct age from the database 
SELECT DISTINCT(age) from user

-- getting count from the table 
SELECT COUNT(*) from USER

-- use group by clause 
SELECT COUNT(*),age from user GROUP BY age ;

--use wildcard cahracter with like keyword 
SELECT * from user where email_id like '%@gmail.com'

SELECT * from user where email_id like '_eelrana6@gmail.com'

