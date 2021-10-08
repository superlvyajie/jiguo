var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 报告最新
router.get('/new', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/report.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);

            res.send(result.new);
        }
    });
});

// 报告最热
router.get('/hot', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/report.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);

            res.send(result.hot);
        }
    });
});

module.exports = router;