const router = require('express').Router();
const { Comment, Blog } = require('../../models');

// Endpoint /api/comments

// GET ALL
router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            include: [{ all: true, nested: true }],
        })
        res.status(200).json(allComments);
    } catch (err) {
        res.status(500).json('COMMENTS FINDALL', err);
    }
});

// GET SINGLE
router.get('/:id', async (req, res) => {
    try {
        const singleComment = await Comment.findByPk(req.params.id, {
            include: [{ all: true, nested: true }],

        })
        if (!singleComment) {
            res.status(404).json({ message: 'No Comment found with that id' });
            return;
        }
        res.status(200).json(singleComment);
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST CREATE
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json('Something went wrong', err);
    }
});



// PUT UPDATE
router.put('/:id', async (req, res) => {
    try {
        const checkID = await Comment.findByPk(req.params.id)
        const updateComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!checkID) {
            res.status(404).json('No Comment found with that id');
            return
        }
        res.status(200).json({ message: 'Comment has been updated' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// DELETE DESTORY
router.delete('/:id', async (req, res) => {
    try {
        const delComment = await Comment.destroy({
            where: {
                id: req.params.id
            },
        })
        if (!delComment) {
            res.status(404).json({ message: 'No Comment found with that id' });
        }
        res.status(200).json({ message: 'Comment has been deleted' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});







// Export
module.exports = router;