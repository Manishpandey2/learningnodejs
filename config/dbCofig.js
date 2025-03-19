require("dotenv").config();
const databaseConfig = {
  host: process.env.HOST,
  username: process.env.DBUSERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  dialect: "mysql",
  port: 3306,
};

module.exports = databaseConfig;
