/**
 * Created by wht719582321 on 2016/7/26.
 // */
var day=sessionStorage.day;                                    //获取当前天数;
var DayNum=["一","二","三","四","五","六","七","八","九",];    //天数汉字
var $fuzhi=$(".day-wrap");
for(var i=0;i<(day-1);i++){                                   //天数增加
console.log($fuzhi);
$(".content").append($fuzhi.clone());
$(".content .days").eq(i+1).html("第"+DayNum[i+1]+"天<div></div>");
    // $fuzhi.eq(i).find(".days-game").hide();                     //隐藏之前天的过程
    $(".day-wrap").eq(i).find(".days-game").hide();                     //隐藏之前天的过程
    $(".day-wrap").eq(i+1).find(".days-game").show();
}

$(".nextHtml").click(function () {                              //页面跳转
   location.href="js4-3.html";
    var js4_3Log=1;     //确定跳转js4-3为投票页面
    sessionStorage.js4_3=js4_3Log;

});
var daysNow=1;
$(".days").click(function () {                                  //点击隐藏效果
    if(daysNow){
        $(this).next().hide();
        // $(".days-game").hide();
        daysNow=0
    }
    else {
        $(this).next().show();
        daysNow=1;
    }
});

