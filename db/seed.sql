create table "user" (
    id serial primary key,
    userName varchar(30),
    passWord varchar(30)
);

insert into "user" (
    userName,
    passWord
) values (
'usertest',
'passtest'
)