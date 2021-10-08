var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

//导购 最新
router.get('/new', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/guid.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);
            //   console.log(result);
            res.send(result.new);
        }
    });
});
// 最热
router.get('/hot', function(req, res) {
    //console.log(req.body); //获取请求参数
    var file = path.join(__dirname, './../public/data/guid.json');
    // console.log(__dirname, file);

    //读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            var result = JSON.parse(data);
            // console.log(result);
            res.send(result.hot);
        }
    });
});

module.exports = router;