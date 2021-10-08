// const { template } = require("./art-template");


window.onload = function () {
    var focus = document.querySelector('.focus');
    var w = innerWidth - 1000;
    focus.style.backgroundPosition = -475 + (w / 2) + "px 0";

    function setRemian() {
        var remain_time = +new Date("2021-12-25 00:00:00");
        var now_time = +new Date();
        var time = (remain_time - now_time) / 1000;
        var d = parseInt(time / 60 / 60 / 24);
        d = d < 10 ? '0' + d : d;
        var h = parseInt(time / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        var m = parseInt(time / 60 % 60);
        m = m < 10 ? '0' + m : m;
        remain.innerHTML = d + '天' + h + '小时' + m + '分钟';
    }
    setRemian();
    setInterval(setRemian, 30000);


    $.ajax({
        url: "http://192.168.1.41:3000/useing/public",
        success: function (res) {
            setTry(res, function () {
                var flag = 0;
                // console.log($(".hotuse ul").children(1).css("width"));
                $(".hotuse ul").css("width", $(".hotuse ul").children().length * $(".hotuse ul").children(1).outerWidth(true) + "px");
                for (var i = 0; i < $(".over li").length; i++) {
                    if ($(".position").eq(i).text().indexOf("体验师") != -1) {
                        $(".position").eq(i).css(
                            {
                                "backgroundColor": "#f9f2c8",
                                color: "#c3a36a"
                            }
                        );
                    }
                };

                var index = 0;

                //封装一个图片移动的动画
                function ani(obj, target, callback) {
                    clearInterval(obj.timer);
                    obj.timer = setInterval(function () {
                        var step = 0;
                        if ((target - obj.offsetLeft) / 10 > 1) {
                            step = Math.floor((target - obj.offsetLeft) / 10);
                        } else if ((target - obj.offsetLeft) / 10 >= 0 && (target - obj.offsetLeft) / 10 <= 1) {
                            step = Math.ceil((target - obj.offsetLeft) / 10);
                        } else if ((target - obj.offsetLeft) / 10 < -1) {
                            step = Math.ceil((target - obj.offsetLeft) / 10);
                        } else {
                            step = Math.floor((target - obj.offsetLeft) / 10);
                        }
                        obj.style.left = obj.offsetLeft + step + 'px';
                        if (obj.style.left == target + 'px') {
                            clearInterval(obj.timer);
                            if (callback) {
                                callback();
                            }
                        }
                    }, 10);
                }
                
                
                //用计时器做图片轮播功能
                var timer = setInterval(lb, 1000);
                
                // 封装轮播的方法
                function lb() {
                    index++;
                    if (index < $(".hotuse ul li").length - 4) {
                       
                        ani($(".hotuse ul")[0], - $(".hotuse ul li").outerWidth(true) * index);
                        // console.log(index);
                    } else if (index = $(".hotuse ul li").length - 4) {
                        
                        console.log(index);
                        ani($(".hotuse ul")[0],- $(".hotuse ul li").outerWidth(true) * index,function() {
                            $(".hotuse ul")[0].style.left = 0;
                            // console.log(in_.style.left);
                            index = 0;
                        });
            
                    }
                }
                
                //绑定鼠标移入停止 移出继续 切换 
                $(".hotuse")[0].onmouseenter = function () {
                    clearTimeout(timer);
                }
                $(".hotuse")[0].onmouseleave = function () {
                    timer = setInterval(lb, 1000)
                }
                
                //点击左侧实现上一个
                $(".hotuse .prev")[0].onclick = function () {
                    if (index > 1) {
                        index--;
                       
                        ani($(".hotuse ul")[0],- $(".hotuse ul li").outerWidth(true) * index);
                    } else if (index == 1) {
                        index--;
                        
                        ani($(".hotuse ul")[0],- $(".hotuse ul li").outerWidth(true) * index,function() {
                            $(".hotuse ul")[0].style.left = $(".hotuse ul li").length * $(".hotuse ul li").outerWidth(true) + "px";
                            index = $(".hotuse ul li").length;
                        });
                        
                
                    }
                
                }
                
                //点击右侧 实现下一个
                $(".hotuse .next")[0].onclick = function () {
                    lb();
                }





            });
        }
    })


    function setTry(res, callback) {
        var html = template('try', {
            value: res
        })
        $(".hotuse ul").html(html);
        if (callback) {
            callback();
        }
    }


    $.ajax({
        url: "http://192.168.1.41:3000/report/new",
        success: function (res) {
            res = res.slice(0, 8);
            setTry1(res);
        }
    })


    function setTry1(res) {
        var html = template('report', {
            value: res
        })
        $(".report ul").html(html);
    }

    $.ajax({
        url: "http://192.168.1.41:3000/guid/new",
        success: function (res) {
            res = res.slice(0, 4);
            setTry2(res);
        }
    })


    function setTry2(res) {
        var html = template('new_list', {
            value: res
        })
        $(".newlist .mine").html(html);
    }



    function setCold(flag) {
        $.ajax({
            url: "http://192.168.1.41:3000/play/new",
            success: function (res) {
                setTry2(res[flag]);
            }
        })


        function setTry2(res) {
            var html = template('coldplay', {
                value: res
            })
            $(".coldplay ul").append(html);
        }
    }
    var flag = 0;
    setCold(flag);

    $(".clickmore").on("click", function () {
        if (flag < 4) {
            flag++;
            setCold(flag);
        }
        if (flag == 3) {
            $(this).hide().siblings(".nomore").show();
        }
    })





    

}