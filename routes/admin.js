var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.render('admin/index',{
      title:'后台管理系统主页面'
  });
});


// Get admin login page
router.get('/login',function(req, res, next){
    res.render('admin/login',{
        title:'后台登录页面'
    });
});

module.exports = router;
