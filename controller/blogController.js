const { db } = require("../model/index");
const { blogs } = db;
exports.deleteBlog = async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({ where: { id: id } });
  res.redirect("/dashboard");
};

exports.singleBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findByPk(id);
  res.render("singleBlog", { blog: blog });
};

exports.getCreatePost = (req, res) => {
  res.render("createpost");
};

exports.postCreatePost = async (req, res) => {
  const { title, description, category } = req.body;
  const image = req.file.filename;
  await blogs.create({
    title: title,
    description: description,
    category: category,
    image: image,
  });
  res.send("Blog created successfully");
};
