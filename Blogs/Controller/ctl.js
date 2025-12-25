const Blog = require("../model/sechma");

// Home Page
module.exports.home = async (req, res) => {
    const blogs = await Blog.find({});
    res.render("home", { blogs });
};

// Add Blog
module.exports.addBlog = async (req, res) => {
    await Blog.create(req.body);
    res.redirect("/");
};

// Delete Blog
module.exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.query.id);
    res.redirect("/");
};

// Edit Page
module.exports.editBlog = async (req, res) => {
    const blog = await Blog.findById(req.query.id);
    res.render("update", { blog });
};

// Update Blog
module.exports.updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.body.id, req.body);
    res.redirect("/");
};
