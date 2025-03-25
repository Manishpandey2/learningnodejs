require("dotenv").config();
const databaseConfig = {
  host: process.env.HOST || "127.0.0.1",
  username: process.env.DBUSERNAME,
  password: process.env.PASSWORD || "",
  database: process.env.DB,
  dialect: "mysql",
  port: 46773,
};

module.exports = databaseConfig;
