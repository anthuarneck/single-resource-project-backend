DROP DATABASE IF EXISTS games_dev;

CREATE DATABASE games_dev;

\c games_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price DECIMAL NOT NULL,
    esrb_rating TEXT NOT NULL,
    release_year NUMBER NOT NULL,
    available BOOLEAN,
    genre TEXT NOT NULL,
    score (rating >= 0 AND rating <= 5),
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
);

CREATE TABLE favorited_games (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games (id),
    user_id INTEGER REFERENCES user (id),
);