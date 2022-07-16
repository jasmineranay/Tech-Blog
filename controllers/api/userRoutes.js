const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Blog, User, Comment } = require('../../models');

// Endpoint /api/users

// GET ALL
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Blog }],
        })
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json('Something went wrong', err);
    }
});

// GET SINGLE
router.get('/:id', async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id, {
            include: [{ model: Blog }],
        })
        if (!singleUser) {
            res.status(404).json({ message: 'No User found with that id' });
            return;
        }
        res.status(200).json(singleUser);
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST CREATE
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        user_email: req.body.user_email,
        user_password: req.body.user_password
    })
        .then(newUser => {
            // Create session variable
            req.session.save(() => {
                req.session.user_id = newUser.user_id;
                req.session.logged_in = true;
                res.status(200).json(newUser);
            });
        })
})

// PUT UPDATE
router.put('/:id', async (req, res) => {
    try {
        const checkID = await User.findByPk(req.params.id)
        const updateUser = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!checkID) {
            res.status(404).json('No User found with that id');
            return
        }
        res.status(200).json({ message: 'User has been updated' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// DELETE DESTORY
router.delete('/:id', async (req, res) => {
    try {
        const delUser = await User.destroy({
            where: {
                id: req.params.id
            },
        })
        if (!delUser) {
            res.status(404).json({ message: 'No User found with that id' });
        }
        res.status(200).json({ message: 'User has been deleted' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST LOGIN
router.post('/login', async (req, res) => {
    try {
        // Find User
        const findUser = await User.findOne({
            where: {
                username: req.body.username
            }
        });
        if (!findUser) {
            res.status(400).json({ message: 'Email is not registered.' });
            return;
        };

        // Compare bcrypt'd password
        const checkPassword = await bcrypt.compare(
            req.body.user_password,
            findUser.user_password
        );
        if (!checkPassword) {
            res.status(400).json({ message: 'Incorect email or password.  Please try again' });
            return;
        }

        // Create session variable
        req.session.save(() => {
            req.session.user_id = findUser.user_id;
            req.session.logged_in = true;
            res.json({ user: findUser, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json('IM THERE ERROR HERE', err)
    }
})

// POST LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


// Export
module.exports = router;