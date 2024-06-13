const { getBlog, addBlog, deleteBlog, updateBlog } = require("../controller/blogController")

const router = require("express").Router()

router

    .get("/", getBlog)
    .post("/add-blog", addBlog)
    .delete("/delete-blog/:blogId", deleteBlog)
    .put("/update-blog/:blogId", updateBlog)

module.exports = router