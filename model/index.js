const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("nodeproject", "root", "", {
  host: "localhost",
  port: 3306,
});
