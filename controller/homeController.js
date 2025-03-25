const { db } = require("../model/index");
const { blogs } = db;

exports.homePage = async (req, res) => {
  const datas = await blogs.findAll();
  res.render("home", { blogs: datas });
};
