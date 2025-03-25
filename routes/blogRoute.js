const {
  getCreatePost,
  postCreatePost,
  deleteBlog,
  singleBlog,
} = require("../controller/blogController");
const { multer, storage } = require("../middleware/multerConfig");

const upload = multer({ storage: storage });
const router = require("express").Router();

router.route("/").get();

router
  .route("/createpost")
  .get(getCreatePost)
  .post(upload.single("image"), postCreatePost);
router.route("/deleteBlog/:id").get(deleteBlog);
router.route("/singleBlog/:id").get(singleBlog);

module.exports = router;
