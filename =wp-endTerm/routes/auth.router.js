const { Router } = require('express');
const { models: { User } } = require('../mongo');

const router = Router();

router.post('/join', async (req, res, next) => { const { username, password, email } = req.body;
  const exUser = await User.findOne({ username });

  // username을 쓰는 사용자가 이미 존재하는 경우
  if (exUser) {
    // 에러 메시지를 설정하고 다시 join 페이지로 리다이렉션
    req.flash('errorMessage', '사용중인 아이디입니다.');
    return res.redirect('/join');
  }

  await User.create({ username, password, email }); // 사용자를 DB에 저장하고
  res.redirect('/login');                           // 로그인 페이지로 리다이렉션
});

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
  
    if (!user) {
      req.flash('errorMessage', '등록되지 않은 아이디입니다.');
      return res.redirect('/login');
    } else if (!user.authenticate(password)) {
      req.flash('errorMessage', '잘못된 비밀번호입니다.');
      return res.redirect('/login');
    }
    
    req.session.isAuthenticated = true;
    req.session.user = { username };
  
    res.redirect('/');
});

router.get('/logout', (req, res, next) => {
    req.session.destroy();   // 세션 정보를 삭제
    res.redirect('/login');  // 로그인 페이지로 리다이렉션
});
  

module.exports = router;
