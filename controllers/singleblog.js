const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const loggedIn = require('../utils/auth');


// GET SINGLE
router.get('/blogs/:id', loggedIn, async (req, res) => {
  try {
    const singleBlog = await Blog.findByPk(req.params.id, {
      // include: [{ model: User }, { model: Comment }],
      include: [{ all: true, nested: true }],

    })
    if (!singleBlog) {
      res.status(404).json({ message: 'No Blog found with that id' });
      return;
    }

    const blogComments = await Comment.findAll({
      include: [{ model: User }],
      where: {
        blog_id: req.params.id
      }
    })
    // res.status(200).json(singleBlog);
    const blog = singleBlog.get({ plain: true });
    const comment = blogComments.map(comments =>
      comments.get({ plain: true })
    )
    res.render('singleBlog', {
      blog,
      comment,
      logged_in: req.session.logged_in,
      isowner: blog.user_id === req.session.user_id

      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;