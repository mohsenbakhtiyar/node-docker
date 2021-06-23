const express = require("express");

const postController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware")

const router = express.Router();

//loclhost:/3000
router
  .route(`/`)
  .get(protect, postController.getAllPost)
  .post(protect, postController.creatPost);

router
  .route(`/:id`)
  .get(protect, postController.getOnePost)
  .patch(protect, postController.updatePost)
  .delete(protect, postController.deletePost);

module.exports = router;
