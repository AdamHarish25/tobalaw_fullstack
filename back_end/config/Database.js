import { Sequelize } from "sequelize";

const db = new Sequelize(
  "u664670995_auth_db",
  "u664670995_tobalaw_id",
  "myPassword_321",
  {
    host: "156.67.222.52",
    dialect: "mysql",
    port: 3306,
  }
);

export default db;
