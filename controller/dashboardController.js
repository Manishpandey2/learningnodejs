const { db } = require("../model/index");
const { blogs, users } = db;

exports.getDashboard = async (req, res) => {
  const datas = await blogs.findAll();
  const user = await users.findAll();

  res.render("dashboard", { blogs: datas, users: user });
};
