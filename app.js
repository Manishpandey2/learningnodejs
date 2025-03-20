require("dotenv").config();

let express = require("express");
const { db } = require("./model/index");
const { blogs } = db;
let app = express();

require("./model/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/createpost", (req, res) => {
  res.render("createpost");
});
app.post("/createpost", async (req, res) => {
  const { title, description, category, image } = req.body;
  await blogs.create({
    title: title,
    description: description,
    category: category,
    image: image,
  });
  res.send("Blog created successfully");
});

app.use(express.static("public/css"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
