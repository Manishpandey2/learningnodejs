require("dotenv").config();

let express = require("express");
let app = express();

require("./model/index");

const authRoute = require("./routes/authRoute");
const homeRoute = require("./routes/homeRoute");
const dashboardRoute = require("./routes/dashboardRoute");
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/", homeRoute);
app.use("/", authRoute);
app.use("/", dashboardRoute);
app.use("/", userRoute);
app.use("/", blogRoute);

app.use(express.static("public/css"));
app.use(express.static("./storage/"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
