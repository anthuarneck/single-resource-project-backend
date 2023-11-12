DROP DATABASE IF EXISTS games_dev;

CREATE DATABASE games_dev;

\c games_dev;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price DECIMAL NOT NULL,
    esrb_rating TEXT NOT NULL,
    release_year INTEGER     NOT NULL,
    available BOOLEAN,
    genre TEXT NOT NULL,
    score INTEGER CHECK (score >= 0 AND score <= 5),
    user_id INTEGER REFERENCES users (id) 
);

CREATE TABLE favorited_games (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES games (id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    UNIQUE (game_id, user_id)
);