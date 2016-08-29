/**
 * Created by wht719582321 on 2016/7/28.
 */
var gameLog=sessionStorage.gameLog;     //获取游戏Log
console.log(gameLog);
gameLog=JSON.parse(gameLog);
console.log(gameLog);
var gameover=sessionStorage.gameover;   //获取生成页面
var player=sessionStorage.obj;
    player=JSON.parse(player);
var a=0,b=0;                            //杀手平民总数；

// 计算杀手平民人数
for(var i=0;i<player.length;i++){
    if(player[i].status=="杀手"){
        a++;                            //杀手人数
    }
    else if (player[i].status=="平民"){
        b++;                            //平民人数
    }
}


// 判断平民杀手胜利图片
if (gameover==0){               //杀手胜利页面
    $(".win img.src").val("images/杀手胜利.png")
}
else if (gameover==1){          //平民胜利页面
    $(".win img.src").val("images/平民胜利.png")
}
// 正常页面
// 角色总数量
$(".result ul").append("<li>杀   手"+a+"人</li>");
$(".result ul").append("<li>平   民"+b+"人</li>");

// GameLog

for(var i=0;i<gameLog.length;i++) {
    $(".process").append("<li></li>");
    if (gameLog[i].白天==undefined){
        $(".process>li").eq(i).append("<ul> <li>" + gameLog[i].天数 + "<span>0小时07分</span></li>" + gameLog[i].晚上+ "</ul>");
    }
    else {
        $(".process>li").eq(i).append("<ul> <li>" + gameLog[i].天数 + "<span>0小时07分</span></li>" + gameLog[i].晚上+ gameLog[i].白天 + "</ul>");

    }
}