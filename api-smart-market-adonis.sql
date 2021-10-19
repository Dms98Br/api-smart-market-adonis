create database smart_market;
create table users(
	id_user integer not null auto_increment,
	name varchar(45) not null,
    last_name varchar(45) not null,
    email varchar(45) not null,
    user_admin boolean not null default'0',
	status boolean default'1' not null,
    password varchar(100) not null,
	token_confirmation varchar(100),
    token_recover varchar(100),
    created_at datetime DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime  DEFAULT CURRENT_TIMESTAMP,
    deleted_at datetime  DEFAULT CURRENT_TIMESTAMP,
    constraint pk_id_user primary key (id_user)
);
INSERT INTO users (name,last_name,email,password) values ('Daniel','Moya da Silva','moya10silva@gmail.com','1234567');
Select * from users;
SELECT * from users WHERE email='moya10silva@gmail.com'