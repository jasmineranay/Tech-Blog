const router = require('express').Router();

//when a GET request is received on the root(/) route,
//render the home.handlebars view
// router.get('/', (req, res) => {
//   res.render('home');
// });

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/portal', (req, res) => {
  res.render('portal');
});

module.exports = router;