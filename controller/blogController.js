const { where } = require("sequelize");
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
  // res.send("Blog created successfully");
  res.redirect("dashboard");
};

exports.getEditBlog = async (req, res) => {
  try {
    const id = req.params.id;

    if (isNaN(id)) {
      return res.status(400).send("Invalid blog ID");
    }

    const blog = await blogs.findByPk(id);

    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    res.render("editpost", { blog });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.postEditBLog = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, category } = req.body;
    const image = req.file;

    if (!title || !description || !category) {
      return res.status(400).send("Each Fields are required except image");
    }
    const updateData = {
      title,
      description,
      category,
    };
    if (image) {
      updateData.image = image.filename;
    }
    await blogs.update(updateData, {
      where: {
        id: id,
      },
    });
    res.status(200).redirect("/dashboard");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
