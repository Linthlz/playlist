-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 09, 2025 at 06:26 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `alembic_version`
--

CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `alembic_version`
--

INSERT INTO `alembic_version` (`version_num`) VALUES
('b72a34012b7c');

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int NOT NULL,
  `play_name` varchar(100) NOT NULL,
  `play_url` varchar(200) DEFAULT NULL,
  `play_thumbnail` varchar(200) DEFAULT NULL,
  `play_genre` varchar(50) NOT NULL,
  `play_description` text,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `play_name`, `play_url`, `play_thumbnail`, `play_genre`, `play_description`, `user_id`) VALUES
(2, 'Haus in neu berlin', 'https://www.youtube.com/watch?v=x_artPecEaM&list=RDPnvbo_JW9_E&index=8', 'https://img.youtube.com/vi/x_artPecEaM/sddefault.jpg', 'Video Spiele Musik', 'one of wolfenstein new order music', 2),
(3, 'Heroes By David Bowie', 'https://www.youtube.com/watch?v=YLp2cW7ICCU&list=RDYLp2cW7ICCU&start_radio=1', 'https://img.youtube.com/vi/YLp2cW7ICCU/sddefault.jpg', '70s Music', 'We Can Be Heroes, Just for one day', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(80) NOT NULL,
  `email` varchar(120) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `name`, `password`) VALUES
(1, 'tester', 'tester@example.com', 'testificate', 'pbkdf2:sha256:1000000$YInHLPFTNHSAXqY0$ef9128988b32bbc00595cdae8eb54fb1554640f8dfdab9b6152b4a14b575d76d'),
(2, 'Viktor', 'Viktor@example.com', 'Viktor', 'pbkdf2:sha256:1000000$baBSNq46lL3BLeCg$d9e029c6c1d874f3d7813b7db649841a254035236a270b2f7492d80b27798ccf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alembic_version`
--
ALTER TABLE `alembic_version`
  ADD PRIMARY KEY (`version_num`);

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
