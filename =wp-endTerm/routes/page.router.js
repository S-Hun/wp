const { Router } = require('express');
const { requireAuthentication } = require('../middlewares/auth')
const { models: { Post } } = require('../mongo');

const router = Router();

router.get('/', (req, res, next) => {
  res.cookie('myCookie', 'from Index');
  Post.find({}, function(err, data){
    if(err){
        console.log(err);
        return
    }
    
    res.render('index', {
      title: 'Code Slit',
      cookie: JSON.stringify(req.cookies),
      posts: data,
    });
  });
});

router.get('/join', (req, res, next) => {
  res.render('join', {
    title: 'Code Slit - 회원가입',
    errorMessage: req.flash('errorMessage')
  });
});

router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Code Slit - 로그인',
    errorMessage: req.flash('errorMessage')
  }); 
});

router.get('/post', requireAuthentication, (req, res, next) => {
  res.render('post-form', {
    title: 'Code Slit'
  });
});

router.get('/read', requireAuthentication, (req, res, next) => {
  res.render('read', {
    title: 'Code Slit - 게시글'
  });
});


module.exports = router;
