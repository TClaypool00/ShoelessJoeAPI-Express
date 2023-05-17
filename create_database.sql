CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    is_admin BIT NOT NULL DEFAULT 0
)

CREATE DEFINER=`root```@```localhost` PROCEDURE `sp_sel_users`(IN `index_number` INT, IN `offset_number` INT) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER SELECT u.user_id, u.first_name, u.last_name, u.email, u.phone_number, u.is_admin FROM users u LIMIT offset_number, index_number