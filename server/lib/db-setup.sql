-- UNCOMMENT TO RESTART DATABASE;
DROP DATABASE beanthere;

-- Create the 'beanthere' database if it doesn't exist
CREATE DATABASE beanthere;

-- Connect to the 'beanthere' database
\c beanthere

-- Drop tables if they exist
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS reviews_photos CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS friends CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS chat_members CASCADE;
DROP TABLE IF EXISTS chat_rooms CASCADE;

-- Create the 'users' table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  photo TEXT NOT NULL,
  banner_photo TEXT,
  about TEXT NOT NULL,
  private BOOLEAN NOT NULL DEFAULT false
);

-- Create the 'locations' table
CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  location_place_id INTEGER NOT NULL
);

-- Create the 'reviews' table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  body TEXT NOT NULL,
  createdAt DATE,
  rating INTEGER NOT NULL,
  location_id INTEGER
);

-- Create the 'reviews_photos' table
CREATE TABLE reviews_photos (
  id SERIAL PRIMARY KEY,
  photo_url TEXT NOT NULL,
  review_id INTEGER
);

-- Create the 'wishlist' table
CREATE TABLE location_wishlists (
  id SERIAL PRIMARY KEY,
  location_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  visited INTEGER DEFAULT 0
);

-- Create the 'friends' table
CREATE TABLE friends (
  id SERIAL PRIMARY KEY,
  friend INTEGER NOT NULL,
  user_id INTEGER NOT NULL
);

-- Create the 'chat_rooms' table
CREATE TABLE chat_rooms (
  id SERIAL PRIMARY KEY,
  chat_name TEXT NOT NULL
);

-- Create the 'chat_members' table
CREATE TABLE chat_members (
  id SERIAL PRIMARY KEY,
  room_id INTEGER,
  user_id INTEGER
);

-- Create the 'messages' table with DATE for createdAt
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message_text TEXT NOT NULL,
  message_user INTEGER NOT NULL,
  createdAt DATE,
  room_id INTEGER
);

------------------------------------------------------
-- MOCK DATA
------------------------------------------------------

-- Insert mock data into the 'users' table
INSERT INTO users (username, email, password, photo, banner_photo, about, private) VALUES
  ('user1', 'user1@example.com', 'password1', 'photo1.jpg', 'banner1.jpg', 'About user1', false),
  ('user2', 'user2@example.com', 'password2', 'photo2.jpg', 'banner2.jpg', 'About user2', false),
  ('user3', 'user3@example.com', 'password3', 'photo3.jpg', 'banner3.jpg', 'About user3', true);

-- Insert mock data into the 'locations' table
INSERT INTO locations (location_place_id) VALUES
  (12345),
  (54321),
  (98765);

-- Insert mock data into the 'reviews' table
INSERT INTO reviews (title, body, createdAt, rating, location_id) VALUES
  ('Review 1', 'This is the first review', '2023-09-15', 4, 1),
  ('Review 2', 'Another review here', '2023-09-16', 5, 2),
  ('Review 3', 'Yet another review', '2023-09-17', 3, 1);

-- Insert mock data into the 'reviews_photos' table
INSERT INTO reviews_photos (photo_url, review_id) VALUES
  ('photo1.jpg', 1),
  ('photo2.jpg', 2),
  ('photo3.jpg', 1);

-- Insert mock data into the 'location_wishlists' table
INSERT INTO location_wishlists (location_id, user_id, visited) VALUES
  (1, 1, 0),
  (2, 1, 1),
  (3, 2, 0);

-- Insert mock data into the 'friends' table
INSERT INTO friends (friend, user_id) VALUES
  (2, 1),
  (3, 1),
  (1, 2);

-- Insert mock data into the 'chat_rooms' table
INSERT INTO chat_rooms (chat_name) VALUES
  ('Chat Room 1'),
  ('Chat Room 2');

-- Insert mock data into the 'chat_members' table
INSERT INTO chat_members (room_id, user_id) VALUES
  (1, 1),
  (1, 2),
  (2, 2);

-- Insert mock data into the 'messages' table
INSERT INTO messages (message_text, message_user, createdAt, room_id) VALUES
  ('Hello, how are you?', 1, '2023-09-15', 1),
  ('I am good, thanks!', 2, '2023-09-15', 1),
  ('This is a test message', 1, '2023-09-16', 2);
