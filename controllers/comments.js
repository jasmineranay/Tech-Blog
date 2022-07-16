const router = require('express').Router();
const { Comment } = require('../models');
const loggedIn = require('../utils/auth');



// Date Handler
const today = new Date();
const dateFormatter = '"' + today.toISOString().slice(0, 10) + '"';

// POST CREATE
router.post('/comment', loggedIn, async (req, res) => {
    try {

        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            comment_post_date: dateFormatter,
            user_id: req.session.user_id,
            blog_id: req.body.blog_id,
        });
        if (!newComment) {
            res.status(404).json('No Comment found with that id');
            return
        }
        res.status(200).json({ message: 'Comment has been created' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

module.exports = router;