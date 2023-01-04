CREATE DATABASE interer_b;
\c interer_b;

CREATE TABLE IF NOT EXISTS partners(
    partners_id serial primary key,
    partners_img text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS contact(
    contact_id serial PRIMARY KEY,
    contact_name varchar(60) not null,
    phone_number varchar(30) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS teams(
    team_id serial PRIMARY KEY,
    team_name varchar(60) not null,
    team_img text not null,
    team_position varchar(60) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS youtube(
    tube_id serial PRIMARY KEY,
    tube_title_uz varchar(60) not null,
    tube_title_en varchar(60) not null,
    tube_title_ru varchar(60) not null,
    tube_video text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS projects(
    project_id serial PRIMARY KEY,
    project_img text not null,
    project_title_uz varchar(300) not null,
    project_title_en varchar(300) not null,
    project_title_ru varchar(300) not null,
    project_description_uz text not null,
    project_description_en text not null,
    project_description_ru text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS client(
    client_id serial PRIMARY KEY,
    client_text_uz text not null,
    client_text_en text not null,
    client_text_ru text not null,
    client_video text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS single(
    single_id serial PRIMARY KEY,
    single_img1 text not null,
    single_img2 text not null,
    single_title_uz varchar(300) not null,
    single_title_en varchar(300) not null,
    single_title_ru varchar(300) not null,
    single_description_uz text not null,
    single_description_en text not null,
    single_description_ru text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS categories(
    category_id serial primary key,
    title_uz varchar(250) not null,
    title_en varchar(250) not null,
    title_ru varchar(250) not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS products(
    product_id serial primary key,
    category_id int references categories(category_id) not null,
    product_img1 text not null,
    product_img2 text not null,
    product_img3 text not null,
    product_img4 text not null,
    product_title_uz varchar(250) not null,
    product_title_en varchar(250) not null,
    product_title_ru varchar(250) not null,
    product_description_uz text not null,
    product_description_en text not null,
    product_description_ru text not null,
    location varchar(100) not null,
    metr varchar(100) not null,
    still varchar(100) not null,
    design varchar(100) not null,
    rows smallint not null,
    cols smallint not null,
    date timestamp default current_timestamp
);

ALTER TABLE products
ADD COLUMN data_date VARCHAR(50);

CREATE TABLE IF NOT EXISTS vakancy(
    vakancy_id serial PRIMARY KEY,
    vakancy_title_uz varchar(300) not null,
    vakancy_title_en varchar(300) not null,
    vakancy_title_ru varchar(300) not null,
    vakancy_description_uz text not null,
    vakancy_description_en text not null,
    vakancy_description_ru text not null,
    date timestamp default current_timestamp
);

CREATE TABLE IF NOT EXISTS calculate(
    calculate_id serial PRIMARY KEY,
    calculate_name varchar(60) not null,
    phone_number varchar(30) not null,
    room_type varchar(250) not null,
    house_type varchar(250) not null,
    room_area varchar(250) not null,
    coment text not null,
    date timestamp default current_timestamp
);






