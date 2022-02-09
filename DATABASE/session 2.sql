-- view databases 
show databases;

--create datbaase 
create database training;

--use training database 
use training;

--create customer table 
create table customer(
c_id int,
c_name varchar(20),
mobile varchar(10));

-- create product table 
create table product(
p_id int primary key,
p_name varchar(20),
price int (10));

-- create orders table 
create table orders(
o_id int primary key,
p_id int references product(p_id),
c_id int references customer(c_id));

--show tables 
show tables;

--describe orders table 
desc orders;

--Add primary key in customer 
Alter table customer add primary key(c_id);

--Add field in orders table 
Alter table orders add column o_date date; 

--Describe orders 
desc orders;

--insert value in customers
insert into customer values (1,'Neel',9157189673),(2,'preksha',1234567890),(3,'mohini',9876543210),(4,'Rushali',9987654321),(5,'Rutwik',9876564328);

--fetch all the data from customer 
select * from customer;

-- insert data in product table 
insert into product values (1,'TV',10000),(2,'Refrigerator',24000),(3,'A.C',32000),(4,'Microwave',24000);

--fetch all data from orders table 
select * from orders;


--describe orders 
desc orders;

-- insert value in orders table 
insert into orders values (8,4,5,'2022-01-11');

--Add foriegn key in orders table 
Alter table orders add foreign key (c_id) references customer(c_id);

-- inner join on customer , product, order table 
select o.o_id,c.c_name,p.p_name,p.price,o.o_date from orders o inner join customer c on o.c_id = c.c_id inner join product p on p.p_id = o.p_id order by o.o_id; 

--left join on orders and customer 
select c.c_name,o.o_id,o.o_date from customer c left join orders o on o.c_id = c.c_id order by c.c_name; 

--right join on product and orders
select p.p_id,p.p_name,o.o_id,o.o_date from orders o right join product p on o.p_id = p.p_id order by p.p_id; 

--insert value in product table 
insert into product values(5,'toaster',1000);



-- procedure 

delimiter $

create procedure spGetOrders() 
begin
	select * from customer; 
end $

--execute procedure 
call spGetOrders $
 
-- create procedure using parameters

delimiter // 

create procedure spGetProductDetails(p_name varchar(30))
begin 
	select o.o_id,c.c_name,p.p_name,p.price,o.o_date from orders o inner join customer c on o.c_id = c.c_id inner join product p on p.p_id = o.p_id where p.p_name = p_name order by o.o_id ; 
end //

call spGetProductDetails('TV');

-- create procedur using out perameter

delimiter //
create procedure spOutProcedure(in pname varchar(20) , out total int)
begin 
select(
	select count(*) 
    from orders o inner join customer c on o.c_id = c.c_id 
    inner join product p on p.p_id = o.p_id 
    where p.p_name = pname 
    order by o.o_id) into total;
end //


 call spOutProcedure('TV',@total) //

delimiter ;

select @total;

-- create view 
create view productview as select o.o_id,c.c_name,p.p_name,p.price,o.o_date from orders o inner join customer c on o.c_id = c.c_id inner join product p on p.p_id = o.p_id where p.p_name = 'TV' order by o.o_id; 

--fetch data from view 
select * from productview;

 