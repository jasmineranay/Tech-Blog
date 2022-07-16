const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const allBlogs = require('./allBlogs-hbs')
const singleBlog = require('./singleBlog-hbs')
const dashboard = require('./dashboard-hbs')
const comment = require('./comment-hbs')

const handlebars = [
    homeRoutes,
    allBlogs,
    singleBlog,
    dashboard,
    comment
]

router.use('/', handlebars);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;