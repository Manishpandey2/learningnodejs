const {
  getCreatePost,
  postCreatePost,
  deleteBlog,
  singleBlog,
  getEditBlog,
  postEditBLog,
} = require("../controller/blogController");
const { isAuthenticated } = require("../middleware/isAuthenticated");
const { multer, storage } = require("../middleware/multerConfig");

const upload = multer({ storage: storage });
const router = require("express").Router();

router.route("/").get();

router
  .route("/createpost")
  .get(getCreatePost)
  .post(isAuthenticated, upload.single("image"), postCreatePost);
router.route("/deleteBlog/:id").get(deleteBlog);
router.route("/singleBlog/:id").get(singleBlog);
router
  .route("/editpost/:id")
  .get(getEditBlog)
  .post(upload.single("image"), postEditBLog);

module.exports = router;
