\c games_dev;

INSERT INTO users (first_name, last_name, email, password)
VALUES
('first', 'last', 'me@gmail.com', 'password'),
('jason', 'blaze', 'hat@gmail.com', 'Radnom1');

INSERT INTO games (title, price, esrb_rating, release_year, available, genre, score)
VALUES
('World of Warcraft', 15.00, 'Teen', 2004, true, 'MMO', 4),
('Final Fantasy XVI', 20.00, 'Teen', 2010, true, 'MMO', 4),
('Runescape', 12.49, 'Teen', 2001, true, 'MMO', 4),
('Blue Protocol', 0.00, 'Teen', 2024, false, 'MMO', 0),
('DC Universe Online', 14.99, 'Teen', 2011, true, 'MMO', 4),
('Call Of Duty Modern Warfare III', 69.99, 'Mature', 2023, true, 'FPS', 4),
('Apex', 0.00, 'Teen', 2019, true, 'FPS', 4),
('Destiny 2', 0.00, 'Teen', 2019, true, 'FPS', 4),
('Back 4 Blood', 59.99, 'Mature', 2021, true, 'FPS', 2),
('Overwatch 2', 0.00, 'Teen', 2022, true, 'FPS', 1),
('Starfield', 69.99, 'Mature', 2023, true, 'RPG', 3),
('Baulder''s Gate', 59.99, 'Mature', 2023, true, 'RPG', 5),
('Final Fantasy VII Rebirth', 69.99, 'Mature', 2024, false, 'RPG', 0),
('Persona 3 Reload', 69.99, 'Mature', 2024, false, 'RPG', 0),
('The Elder Scrolls V: Skyrim', 39.99, 'Mature', 2011, true, 'RPG', 5),
('Cyberpunck', 59.99, 'Mature', 2020, true, 'RPG', 4);
