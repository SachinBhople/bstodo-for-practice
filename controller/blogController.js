const asyncHandler = require("express-async-handler")
const Blog = require("../model/Blog")

exports.getBlog = asyncHandler(async (req, res) => {
    const result = await Blog.find()
    res.status(200).json({ message: "blog Fetch success", result })
})
exports.addBlog = asyncHandler(async (req, res) => {
    await Blog.create(req.body)
    res.status(201).json({ message: "blog Create success" })
})
exports.deleteBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params
    await Blog.findByIdAndDelete(blogId)
    res.status(200).json({ message: "blog Delete success" })
})
exports.updateBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params
    await Blog.findByIdAndUpdate(blogId, req.body)
    res.status(200).json({ message: "blog Update success" })
})