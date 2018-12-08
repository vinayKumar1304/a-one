
CREATE DATABASE IF NOT EXISTS `one`;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50),
  `email` varchar(80) NOT NULL,
  `password` varchar(60) NOT NULL,
  `gender` char(6) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `dob` varchar(12) NOT NULL,
  `status` tinyint(2) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
