const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

//endpoint of allBlogs

// GET ALL
router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            // include: [{ model: User }, { model: Comment }]
            include: [{ all: true, nested: true }],


        });

        // res.status(200).json(allBlogs)

        const blogs = allBlogs.map((posts) =>
            posts.get({ plain: true })
        );
        res.render('home', {
            blogs,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router;