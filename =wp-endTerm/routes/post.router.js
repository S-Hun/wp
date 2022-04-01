const { Router } = require('express');
const { models: { Post } } = require('../mongo');

const router = Router();

router.post('/post-form', async (req, res, next) => { const { subject, text } = req.body;
  const { username } = req.session.user;
  await Post.create({ subject, username, text });
  res.redirect('/');
});

module.exports = router;