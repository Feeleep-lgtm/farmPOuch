CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  googleId VARCHAR(255),
  PRIMARY KEY (id),
  UNIQUE KEY (email)
);

CREATE TABLE investments (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  duration INT(11) NOT NULL,
  amountPerUnit DECIMAL(10, 2) NOT NULL,
  available BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (id)
);

CREATE TABLE user_investments (
  id INT(11) NOT NULL AUTO_INCREMENT,
  userId INT(11) NOT NULL,
  investmentId INT(11) NOT NULL,
  units INT(11) NOT NULL,
  status ENUM('pending', 'active', 'completed') NOT NULL DEFAULT 'pending',
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (investmentId) REFERENCES investments(id)
);
