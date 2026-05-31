const { db } = require("../model/index");
const { blogs, users } = db;

exports.homePage = async (req, res) => {
  const datas = await blogs.findAll({
    include: {
      model: users,
    },
  });
  res.render("home", { blogs: datas });
};
