--use the database 
use training ;

--Agreegate function
select sum(price) from product;
select avg(price) from product; 
select min(price) from product;
select max(price) from product;
select count(*) from product ;
select abs(price) from product;
select price from product limit 1;
select ceil(price) from product;
select floor(price) from product;

--Scalar function 
select upper(p_name) from product;
select lower(p_name) from product;
select length(p_name),p_name from product where p_id = 3;
select now() from dual;

--tcl commands 
start transaction; 
select * from product;
update product set price=2000 where p_id = 1;
commit;

rollback;

select user from mysql.user;

-- Add user Mohini from UI

-- fetching grants from the particular user 
show grants for Neel;

show grants for Mohini;

-- grant permission to the user 

grant select on customer to Mohini;


--revoke the permission from the user 
revoke select on customer from Mohini;
