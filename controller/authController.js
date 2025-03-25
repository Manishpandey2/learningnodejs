const bcrypt = require("bcrypt");
const saltRounds = 8;

const { db } = require("../model/index");
const { users } = db;

exports.getRegister = (req, res) => {
  res.render("register");
};
exports.postRegister = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.send("All fields are required");
  }
  if (password !== confirmPassword) {
    return res.send("Password and confirm password should be same");
  }

  await users.create({
    name: name,
    email: email,
    password: bcrypt.hashSync(password, saltRounds),
    confirmPassword: bcrypt.hashSync(confirmPassword, saltRounds),
  });
  res.redirect("/login");
};

exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await users.findAll({ where: { email: email } });
  if (user.length === 0) {
    return res.send("User not found");
  }
  if (!bcrypt.compareSync(password, user[0].password)) {
    return res.send("Password is incorrect");
  }

  res.redirect("/dashboard");
};
