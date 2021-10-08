window.onload = function() {
    function setAjax(url,tar) {
        $.ajax({
            url:url,
            success:function(res) {
                console.log(res);
                setNew(res,tar);
            }
        })
    
        function setNew(res,tar) {
            var html = template('new_list',{
                value:res
            });
            $(tar + " ul").append(html);
        }
    }

    setAjax("http://192.168.1.41:3000/guid/new",".newlist");

    $(".newlist .clickmore").click(function() {
        console.log(1);
        setAjax("http://192.168.1.41:3000/guid/new",".newlist");
    })


    $(".sort div").on("click",function() {
         $(this).removeClass("current").addClass("current").siblings().removeClass("current");
        if($(this).index() == 0) {
            $(".newlist").css("display","block").siblings(".hotlist").css("display","none");
        } else if ($(this).index() == 1){
            $(".hotlist").css("display","block").siblings(".newlist").css("display","none");
        }
    })


    setAjax("http://192.168.1.41:3000/guid/hot",".hotlist");

    $(".hotlist .clickmore").click(function() {
        console.log(1);
        setAjax("http://192.168.1.41:3000/guid/new",".hotlist");
    })

    $(".newlist,.hotlist").on("click","li",function() {
        location.href = "../detail.html";
    })



}