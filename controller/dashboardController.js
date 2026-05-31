const { db } = require("../model/index");
const { blogs, users } = db;

exports.getDashboard = async (req, res) => {
  const { id } = req.user;
  console.log(id);
  const datas = await blogs.findAll({
    where: {
      userId: id,
    },
  });
  const user = await users.findAll();

  res.render("dashboard", { blogs: datas, users: user });
};
