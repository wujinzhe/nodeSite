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

router.get('/userCenter',function(req, res, next){
    res.render('admin/userCenter',{
        title:'用户中心页面'
    });
});

router.get('/seo',function(req, res, next){
    res.render('admin/seo',{
        title:'SEO优化'
    });
});

router.get('/new',function(req, res, next){
    res.render('admin/new',{
        title:'新闻管理'
    });
});

router.get('/download',function(req, res, next){
    res.render('admin/download',{
        title:'应用下载'
    });
});

router.get('/job',function(req, res, next){
    res.render('admin/job',{
        title:'招聘信息'
    });
});

router.get('/banner',function(req, res, next){
    res.render('admin/banner',{
        title:'首页banner设置'
    });
});

module.exports = router;
