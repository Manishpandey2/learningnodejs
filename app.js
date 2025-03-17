let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  console.log(req);
  res.render("contact");
});
app.get("/about", (req, res) => {
  let name = "Manish";
  res.render("about", { name });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
