var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
// 酷玩最新
router.get('/new', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/play_new.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);
            res.json(result);
        }
    });
});

//   热门
router.get('/hot', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/play_hot.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);
            res.json(result);
        }
    });
});

//   品类
router.get('/category', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/play_category.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);
            res.json(result);
        }
    });
});

module.exports = router;