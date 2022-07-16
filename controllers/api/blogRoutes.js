const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

// Date Handler
const today = new Date();
const dateFormatter = '"' + today.toISOString().slice(0, 10) + '"';


// Endpoint /api/blogs

// GET ALL
// router.get('/', async (req, res) => {
//     try {
//         const allBlogs = await Blog.findAll({
//             include: [{ model: User }, { model: Comment }],
//         })
//         res.status(200).json(allBlogs);
//     } catch (err) {
//         res.status(500).json('Something went wrong', err);
//     }
// });

// GET SINGLE
router.get('/:id', async (req, res) => {
    try {
        const singleBlog = await Blog.findByPk(req.params.id, {
            include: [{ model: User }],
        })
        if (!singleBlog) {
            res.status(404).json({ message: 'No Blog found with that id' });
            return;
        }
        res.status(200).json(singleBlog);
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST CREATE
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            blog_title: req.body.blog_title,
            blog_content: req.body.blog_content,
            blog_post_date: dateFormatter,
            user_id: req.body.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json('Something went wrong', err);
    }
});

// PUT UPDATE
router.put('/', async (req, res) => {
    try {
        const updateBlog = await Blog.update(
            {
                blog_title: req.body.blog_title,
                blog_content: req.body.blog_content,
                blog_post_date: dateFormatter,
                user_id: req.session.user_id

            },
            {
                where: {
                    blog_id: req.body.blog_id,
                }
            })
        res.status(200).json(updateBlog)
    } catch (err) {
        res.status(500).json('Update Route Error', err)
    }
});

// DELETE DESTORY
// router.delete('/:id', async (req, res) => {
//     try {
//         const delBlog = await Blog.destroy({
//             where: {
//                 blog_id: req.params.id
//             },
//         })
//         if (!delBlog) {
//             res.status(404).json({ message: 'No Blog found with that id' });
//         }
//         res.status(200).json({ message: 'Blog has been deleted' })
//     } catch (err) {
//         res.status(500).json('Something went wrong', err)
//     }
// });

// DELETE DESTORY
router.delete('/', async (req, res) => {
    try {
        const delBlog = await Blog.destroy({
            where: {
                blog_id: req.body.blog_id
            },
        })
        if (!delBlog) {
            res.status(404).json({ message: 'No Blog found with that id' });
        }
        res.status(200).json({ message: 'Blog has been deleted' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// Export
module.exports = router;