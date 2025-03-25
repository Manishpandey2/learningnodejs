require("dotenv").config();

let express = require("express");
const { db } = require("./model/index");
const { blogs, users } = db;
let app = express();

require("./model/index");
const { multer, storage } = require("./middleware/multerConfig");
const { homePage } = require("./controller/homeController");
const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
} = require("./controller/authController");
const {
  deleteBlog,
  singleBlog,
  getCreatePost,
  postCreatePost,
} = require("./controller/blogController");
const { delteUser } = require("./controller/userControler");
const { getDashboard } = require("./controller/dashboardController");
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", homePage);

app.get("/deleteBlog/:id", deleteBlog);
app.get("/deleteUser/:id", delteUser);
app.get("/singleBlog/:id", singleBlog);

app.get("/dashboard", getDashboard);

app.get("/register", getRegister);
app.post("/register", postRegister);
app.get("/login", getLogin);
app.post("/login", postLogin);

app.get("/createpost", getCreatePost);
app.post("/createpost", upload.single("image"), postCreatePost);

app.use(express.static("public/css"));
app.use(express.static("./storage/"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
