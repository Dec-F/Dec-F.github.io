/**
 * Created by wht719582321 on 2016/7/25.
 */
var gameLog=[{"天数":0,"晚上":0,"白天":0}];        //新建游戏过程数据，为4-4，4-5做准备
gameLog=JSON.stringify(gameLog);
sessionStorage.gameLog = gameLog;
var Player=sessionStorage.obj;                     //将玩家身份数据提取复制给player
var player = JSON.parse(Player);
var $box=$(".game");
// 生成法官页面玩家信息
for(var i=0;i<player.length;i++){
    var $li=$("<li class='.player4-1'></li>");
    var $role=$("<div class='role'></div>");
    var $playerStatus   =$("<div class='status'>"+player[i].status+"</div>");
    var $background     =$("<div class='background'><img src='images/background.png'></div>");
    var $playerName     =$("<div class='name'>"+player[i].name+"号</div>");
    $box.append($li);
    $li.append($role);
    $role.append($playerStatus);
    $role.append($background);
    $role.append($playerName);
}

var $role=$(".role");
$role.click(judge);                                 //法官点击查看身份
function judge() {                                //函数调用
    $(this).find(".background").css("opacity",0);  //击玩家显示身份
}

// 跳转到天数界面
$("button").click(function () {
    var day=1;
    sessionStorage.day=day;
    location.href="js4-2.html";
});