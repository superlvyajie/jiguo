window.onload = function() {
    function setAjax(url,tar) {
        $.ajax({
            url:url,
            success:function(res) {
                setNew(res,tar,function() {
                    for(var i = 0; i <$(".bc-use li").length;i++) {
                        if($(".position").eq(i).text().indexOf("体验师") != -1) {
                            $(".position").eq(i).css(
                                {
                                    "backgroundColor":"#f9f2c8",
                                    color:"#c3a36a"
                                }
                            );
                        }
                    }
                                       
                });
            }
        })
    
        function setNew(res,tar,callback) {
            var html = template('try',{
                value:res
            });
            $(tar + " ul").append(html);
            if(callback) {
                callback();
            }
        }
    }


    setAjax("http://192.168.1.41:3000/useing/public",".public");

    $(".public .all .clickmore").click(function() {
        setAjax("http://192.168.1.41:3000/useing/public",".public .all");
    })
    $(".public .application .clickmore").click(function() {
        setAjax("http://192.168.1.41:3000/useing/public",".public .application");
    })
    $(".public .ontrail .clickmore").click(function() {
        setAjax("http://192.168.1.41:3000/useing/public",".public .ontrail");
    })
    $(".public .ended .clickmore").click(function() {
        setAjax("http://192.168.1.41:3000/useing/public",".public .ended");
    })

    $(".sort div").on("click",function() {
         $(this).removeClass("current").addClass("current").siblings().removeClass("current");
        if($(this).index() == 0) {
            $(".public").css("display","block").siblings(".experience").css("display","none");
        } else if ($(this).index() == 1){
            $(".experience").css("display","block").siblings(".public").css("display","none");
        }
    })

    $(".use-sort li").on("click",function() {
        $(this).removeClass("current").addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        $(".public>div,.experience>div").eq(index).css("display",'block').siblings().css("display","none");
    })


    setAjax("http://192.168.1.41:3000/useing/master",".experience .all");

    // $(".hotlist .clickmore").click(function() {
    //     console.log(1);
    //     setAjax("http://192.168.1.41:3000/guid/new",".hotlist");
    // })

    // $(".newlist,.hotlist").on("click","li",function() {
    //     location.href = "../detail.html";
    // })


    $(".public ul,.experience ul").on("click","li",function() {
        location.href = "http://127.0.0.1:5500/jiguo/use-detail.html";
    })
}