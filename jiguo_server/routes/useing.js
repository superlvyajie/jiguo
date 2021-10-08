var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// 大众试用
router.get('/public', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/report.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            // console.log(data);
            var result = JSON.parse(data);
            // console.log(result);
            res.send(result.new);
        }
    });
});

// 体验师专享
router.get('/master', function(req, res) {
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