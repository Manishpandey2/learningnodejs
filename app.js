require("dotenv").config();

let express = require("express");
const { db } = require("./model/index");
const { blogs } = db;
let app = express();

require("./model/index");
const { multer, storage } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const datas = await blogs.findAll();
  res.render("home", { blogs: datas });
});

app.get("/deleteBlog/:id", async (req, res) => {
  const id = req.params.id;
  await blogs.destroy({ where: { id: id } });
  res.redirect("/dashboard");
});

app.get("/singleBlog/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await blogs.findByPk(id);
  res.render("singleBlog", { blog: blog });
});
app.get("/deleteBlog", (req, res) => {
  res.render("deleteBlog");
});
app.get("/dashboard", async (req, res) => {
  const datas = await blogs.findAll();

  res.render("dashboard", { blogs: datas });
});

app.get("/createpost", (req, res) => {
  res.render("createpost");
});
app.post("/createpost", upload.single("image"), async (req, res) => {
  const { title, description, category } = req.body;
  const image = req.file.filename;
  await blogs.create({
    title: title,
    description: description,
    category: category,
    image: image,
  });
  res.send("Blog created successfully");
});

app.use(express.static("public/css"));
app.use(express.static("./storage/"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
