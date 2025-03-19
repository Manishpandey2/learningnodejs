const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("meroblog", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: true }).then(() => {
  console.log("yes re-sync done");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error while connecting database", err);
  });
module.exports = sequelize;
