/**
 * Created by wht719582321 on 2016/7/27.
 */
var js4_4Gamelog=sessionStorage.js4_4;             //获取所需生成的页面：1为杀人结果2为投票结果 
var player=sessionStorage.obj;                     //将玩家身份数据提取复制给player
var player = JSON.parse(player);
var kill=sessionStorage.kill;                      //之前被杀玩家
var $killLog;
$killLog=sessionStorage.killLog;
var gameLog=sessionStorage.gameLog;                 //获取gameLog用以储存
    gameLog=JSON.parse(gameLog);
var day=sessionStorage.day;
    day=parseInt(day);
console.log(player);
// 杀人结果页面
function  js4_4Page1() {
    $(".js4-4-1 img").html('<img src="images/js4-4-1.png">');
    // $gameLog[day-1].天数="第"+day+"天";
    // $gameLog[day-1].晚上="<li>"+kill+"号被杀手杀死，"+kill+"号是"+player[kill-1].status+"</li>";
    if(day==1){
        $(".game").html(gameLog[day-1].晚上);
        $killLog=$(".game").html();
        console.log($killLog);
    }
    else{
        $(".game").html($killLog);
        console.log($killLog)
        $(".game").append(gameLog[day-1].晚上);
        $killLog=$(".game").html();
    }
    $(".main").append('<div class="footer-js4-4"> <p>亡灵发表遗言</p> <img src="images/js4-4-1-2.png"> <p>玩家依次发言讨论</p><img src="images/js4-4-1-2.png"> </div>');
    $("button").text("去投票");
    $("button").click(function () {
        location.href="js4-3.html";
        var js4_3Log=2;     //确定跳转js4-3为投票页面
        sessionStorage.js4_3=js4_3Log;  //储存
        sessionStorage.killLog=$killLog;
        // $gameLog=JSON.stringify($gameLog);
        // sessionStorage.gameLog=$gameLog;
    });
}
//投票结果页面
function  js4_4Page2() {
    $(".js4-4-1 img").html('<img src="images/js4-4-2.png">');
    // $gameLog[day-1].天数="第"+day+"天";
    // $gameLog[day-1].白天="<li>"+kill+"号被全民投票投死，"+kill+"号是"+player[kill-1].status+"</li>";
    console.log($killLog);
    $(".game").html($killLog);
    $(".game").append(gameLog[day-1].白天);
    $killLog=$(".game").html();
    $("button").text("下一天");
    $("button").click(function () {
        var day=sessionStorage.day;
        console.log(day);
        day=parseInt(day);          //取出的day是字符串，变为数字后再加1
        day=day+1;
        console.log(day);
        sessionStorage.day=day;
        sessionStorage.killLog=$killLog;
        // $gameLog=JSON.stringify($gameLog);
        // sessionStorage.gameLog=$gameLog;
        location.href="js4-2.html";
    });
}

if(js4_4Gamelog==1){        //判断生成杀人结果页面还是投票结果页面
    js4_4Page1();
}
else {
    js4_4Page2();
}
