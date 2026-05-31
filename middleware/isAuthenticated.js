const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { users } = require("../model/userModel");
const { where } = require("sequelize");
exports.isAuthenticated = async (req, res, next) => {
  const authtoken = req.cookies.token;

  if (!authtoken) {
    return res.status(401).send("You are not Logged In");
  }

  const decodedResult = await promisify(jwt.verify)(
    authtoken,
    process.env.JWT_SECRETKEY,
  );

  const existedUser = await users.findOne({
    where: {
      id: decodedResult.id,
    },
  });
  if (!existedUser) {
    return res.status(401).send("Invalid token");
  }
  req.user = existedUser;
  next();
};
