

/********************************************************base de donnees ABIALE AWOU****************************************/
CREATE DATABASE abiale_awou;

CREATE USER 'ebele'@'localhost' IDENTIFIED BY 'somepassword';

GRANT ALL PRIVILEGES ON * . * TO 'ebele'@'localhost';

FLUSH PRIVILEGES;

USE abiale_awou;


CREATE TABLE utilisateurs (
    id_utilisateur INT AUTO_INCREMENT, 
    nom VARCHAR(100) NOT NULL, 
    prenom VARCHAR(100) NOT NULL, 
    tel INT(100) NOT NULL,
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(100) NOT NULL, 
    PRIMARY KEY(id_utilisateur)
    )






    /*************************************************************************nouvelles base de donnees****************************************************/

CREATE DATABASE auth_db;
