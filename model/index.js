const { Sequelize, DataTypes } = require("sequelize");
const databaseConfig = require("../config/dbCofig");
const userModel = require("./userModel");
const createBlog = require("./blogModel");

const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.blogs = createBlog(sequelize, DataTypes);
db.users = userModel(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => {
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
module.exports = { sequelize, db };
