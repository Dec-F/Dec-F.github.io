/**
 * Created by wht719582321 on 2016/7/23.
 */
var Player=sessionStorage.obj;                     //将玩家身份数据提取复制给player
var player = JSON.parse(Player);
var playerNum=0;                                   //记录当前玩家身份
var page=1;                                        //用来判断身份是显示还是隐藏
// $(".playerName").text(player[0].name);              //默认页面的数据
// $(".content img").attr("src","images/js3.png");     //默认页面的数据
// $("button").text("查看"+player[0].name+"号身份");   //默认页面的数据
// 按钮触发函数
$("button").click(function () {
    var $p1=$(".playerName");                       //获取序号DOM节点位置
    var $img=$(".box img");                         //获取图片DOM节点位置
    var $p2=$(".status");                           //获取文字DOM节点位置
    var $button=$(".content button");               //获取按钮DOM节点位置
    // 判断当前身份是隐藏还是显示
    // 0为查看自己身份
    if (page==0){
        if(playerNum==player.length){               //判断是否为最后一页跳转
            location.href = "../js4/js4-1.html";
        }
        $p1.text(player[playerNum].name);
        $img.attr("src","images/js3.png");
        $p2.text("");
        $button.text("查看"+player[playerNum].name+"号身份");
        page=1;

    }
        // 1为查看自己身份后传给下一个人
    else {
        $p1.text(player[playerNum].name);
        $img.attr("src","images/js3-2.png");
        $p2.text("角色："+player[playerNum].status);
        // 判断是否为最后一页
        if(playerNum==(player.length-1)){
            $button.text("查看法官台本");
            // $button.html("<a href='../js/js3-2.html'>查看法官台本</a>");
        }
        else {
            $button.text("隐藏并传递给"+(player[playerNum].name+1)+"号");
        }
        page=0;
        playerNum=playerNum+1;

    }
    
});