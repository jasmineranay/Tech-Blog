const router = require('express').Router();
const { User, Blog } = require('../models');
const loggedIn = require('../utils/auth');

//end point of /dashboard
router.get('/dashboard', loggedIn, async (req, res) => {
  try {
    const userData = await User.findOne({
      // include: [{ all: true, nested: true }],
      where: {
        user_id: req.session.user_id,
      },
    });

    if (!userData) {
      return res.status(404).json({
        message: 'This user ID does not exist. Please enter a valid user ID!',
      });
    }

    const blogData = await Blog.findAll({
      // include: [{ all: true, nested: true }],
      // include: [{ model: User }],
      where: {
        user_id: req.session.user_id
      }
    })
    // res.status(200).json(userData)
    // res.status(200).json(blogData)

    // Render data
    const user = userData.get({ plain: true });
    const blog = blogData.map(blogs =>
      blogs.get({ plain: true })
    )
    const blogLength = blog.length;
    const hasItems = blogLength > 0 ? true : false;
    res.render('dashboard', {
      user,
      blog,
      hasItems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;