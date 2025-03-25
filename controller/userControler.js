const { db } = require("../model/index");
const { users } = db;

exports.delteUser = async (req, res) => {
  const id = req.params.id;
  await users.destroy({ where: { id: id } });
  res.redirect("/dashboard");
};
