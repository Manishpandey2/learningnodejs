require("dotenv").config();
const databaseConfig = {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  dialect: "mysql",
  port: 3306,
};

module.exports = databaseConfig;
