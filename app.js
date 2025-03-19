require("dotenv").config();

let express = require("express");
let app = express();
console.log("Database user", process.env.DATABASE_USER);
require("./model/index");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  let userdata = [
    (student = {
      name: "Manish",
      age: 20,
      section: "A",
    }),
    (teacher = {
      name: "motte",
      age: 40,
      address: "tarahara",
    }),
  ];
  res.render("contact", { student: student, teacher: teacher, userdata });
});
app.get("/about", (req, res) => {
  let name = "Manish";
  res.render("about", { name });
});

app.use(express.static("public/css"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
