/**
 * Created by gogogo on 2016/8/28.
 */
// banner轮播图
$(function () {
    var listLeft = -770;
    var index = 1;
    $("#prev").click(function () {
        listLeft = listLeft + 770;
        index--;
        if (index < 1) {
            index = 4
        }
        turnImg();
    });
    $("#next").click(function () {
        listLeft = listLeft - 770;
        index++;
        if (index > 4) {
            index = 1
        }
        turnImg();
    });
    var turnImg = function() {
        console.log("turnimg");
        $(".img_list").animate({
            left: listLeft + "px"
        }, 1000, function () {
            $(".button_list span").eq(index-1).addClass("on").siblings().removeClass("on");
            if (listLeft > -770) {
                listLeft = -3080;
                $(".img_list").css("left", "-3080px")
            }
            if (listLeft < -3080) {
                listLeft = -770;
                $(".img_list").css("left", "-770px")
            }
        })
    };

    for (var i = 0; i < 4; i++) {
        $(".button_list span").eq(i).click(function () {
            var tabindex= $(this).attr("tabindex");
            listLeft = listLeft + 770 * (index - tabindex);
            console.log(listLeft,tabindex,index);
            index=tabindex;
            $(this).addClass("on").siblings().removeClass("on");
            $(".img_list").animate({left: listLeft + "px"}, 500)

        })
    }
    var autoImg = function() {
        listLeft=listLeft-770;
        index++;
        if (index > 4) {
            index = 1
        }
        console.log("auto");
        turnImg();
    };
    var time=null;
     time=setInterval(autoImg,3000);
    $(".banner").hover(function () {
        clearInterval(time);
    },function () {
        time=setInterval(autoImg,3000)
    })

});


// 产品轮播图

$(function () {
    var todayleft=-1008;
    $("#today_prev").click(function () {
        todayleft = todayleft + 252;
        turnTodayImg();
    });
    $("#today_next").click(function () {
       todayleft= todayleft - 252;
        turnTodayImg();
    });
    var turnTodayImg = function() {
        $(".today_banner ul").animate({
            left: todayleft + "px"
        }, 1000, function () {
            if (todayleft > -252) {
                todayleft = -2016;
                $(".today_banner ul").css("left", "-2016px")
            }
            if (todayleft < -2772) {
                todayleft = -1008;
                $(".today_banner ul").css("left", "-1008px")
            }
        })
    };
    var autoTodayImg=function () {
        todayleft=todayleft-252;
        turnTodayImg();
    };

    var timetoday=null;
    timetoday=setInterval(autoTodayImg,2000);
    $(".today_banner").hover(function () {
        clearInterval(timetoday);
    },function () {
        timetoday=setInterval(autoTodayImg,2000)
    })
});

// 咨询栏轮播图

$(function () {
    var top=-90;
    var turnforum = function() {
        $(".roll").animate({
            top: top + "px"
        }, 1000, function () {
            if (top < -270) {
                top = -90;
                $(".roll").css("top", "-90px")
            }
        })
    };
    function autoforum() {
        top=top-90;
        turnforum()
    }
    var timeforum=null;
    timeforum=setInterval(autoforum,2000);
    $(".move").hover(function () {
        clearInterval(timeforum);
    },function () {
        timeforum=setInterval(autoforum,2000)
    });

    // 左侧边栏跳转效果


    $(".left_sidebar ul li a").click(function () {
        var id= $(this).attr("href");
        var scrolltop=$(id).offset().top;
        // console.log(scrolltop,id);
        $("html,body").animate({scrollTop:scrolltop},1000);
        return false
    });

    // 左边导航hover效果

    $(".left_nav ul li").hover(function () {
        $(this).children(".lenovo-pc").show()
    },function () {
        $(this).children(".lenovo-pc").hide()
    });

    // 顶部图片关闭按钮

    $(".close").click(function () {
        $(".ad").animate({height:0,opacity:0},1000)
    })

    // 输入栏历史记录

    $("#searchInput").focus(function () {
        $(".history").animate({height:315,opacity:1},1000)
    });
    $("#searchInput").blur(function () {
        $(".history").animate({height:0,opacity:0},1000)
    })
});






