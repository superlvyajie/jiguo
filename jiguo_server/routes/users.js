var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
let users = {}; //保存用户信息


// 登录
router.post('/login', function(req, res) {
    var userinfo = req.body;
    let { username, password } = userinfo;
    console.log(username, password);
    Object.values(users).forEach((item) => {
        console.log(item);
        if (item.username == username || item.phone == username) {
            if (item.password != password) {
                var obj = {
                    msg: "密码错误！",
                    status: 0
                }
                res.send(obj);
            } else {
                var obj = {
                    msg: "登录成功！",
                    status: 0
                }
                res.send(obj);
            }
        } else {
            var obj = {
                msg: "用户名或手机号不存在！",
                status: 1
            }
            res.send(obj);
        }
    });

});

// 保存
router.post('/register', function(req, res) {
    var userinfo = req.body;
    let obj = {},
        s = null;
    let { phone, code, username, password } = userinfo;
    let phone_reg = /^1[3|4|5|6|7|8|9]\d{9}$/g;
    let username_reg = /^(\w|[\u4e00-\u9fa5]){4,8}$/g;
    let pass_reg = /^\w{6,12}$/g;
    Object.values(users).forEach((item) => {
        console.log(item);
        if (item.phone == phone) {
            s = true;
            return;
        }
    });
    console.log(s);
    if (!phone_reg.test(phone) || code != 'r2b7' || !username_reg.test(username) || !pass_reg.test(password)) {
        obj = {
            msg: '注册失败！手机号、用户名、密码、验证码有误！',
            status: 0
        }
        console.log(1);
    } else if (username in users) {
        obj = {
            msg: '用户名已存在',
            status: 0
        }
        console.log(2);
    } else if (s) {
        obj = {
            msg: "手机号已存在",
            status: 0
        }
        console.log(3);

    } else {
        obj = {
            msg: '注册成功！',
            status: 200,
            username
        }
        console.log(4);

        users[username] = { phone, username, password };
    }
    console.log(obj);
    res.send(obj);
});



module.exports = router;