import { Sequelize } from "sequelize";
 
const db = new Sequelize('acte_naissance_deces', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;