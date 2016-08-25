/**
 * Created by wht719582321 on 2016/7/26.
 */

var Player=sessionStorage.obj;                     //将玩家身份数据提取复制给player
var player = JSON.parse(Player);
var js4_3Log=sessionStorage.js4_3;                  //页面是杀手页面还是投票页面
var playerDeath;                                   //记录死亡角色索引值
console.log(js4_3Log);
console.log(player);

// 测试
var kill;
// var kill=sessionStorage.kill;                      //之前被杀玩家
var gameLog=sessionStorage.gameLog;                 //获取gameLog用以储存
gameLog=JSON.parse(gameLog);
var day=sessionStorage.day;
day=parseInt(day);


if (js4_3Log==1){                                   //杀手杀人页面
    js4_3Log1();
}
else if (js4_3Log==2){                      //投票杀人页面
    js4_3Log2();
}

// 杀手杀人页面代码
function js4_3Log1() {
    
    // 生成玩家身份
    var $box=$(".game");
    for(var i=0;i<player.length;i++){
        var $li=$("<li class='player-4-3'></li>");
        var $role=$("<div class='role'></div>");
        var $playerStatus   =$("<div class='status'>"+player[i].status+"</div>");
        var $playerName     =$("<div class='name'>"+player[i].name+"号</div>");
        var $sprite         =$('<ul class="sprite"> <li></li> <li></li> <li></li> <li></li> </ul>')
        $box.append($li);
        $li.append($role);
        $role.append($playerStatus);
        $role.append($playerName);
        $li.append($sprite);
        if (player[i].状态=="死亡"){                    
            $playerStatus.css("background","#83b09a");
        }
    }
    
    
// 点击杀人
    var $last;                                          //用来记录之前点击玩家序号
    $(".player-4-3").click(function () {
        console.log("现在点击");                        //31-33无意义，测试用
        var $boxStatus=$(this).find(".status").text();
        console.log($boxStatus);
        if($boxStatus=="杀手"){                         //判断点击角色身份
            alert("提示：你的身份杀手，请选择杀死平民");
        }
        else if(player[$(this).index()].状态=="死亡"){
            alert("提示：该玩家已死亡，请选择其他玩家");
        }
        else {
            $(this).find(".status").css("background","#83b09a");//点击效果
            $(this).find(".sprite").css("opacity",1);
            console.log("2"+$last);
            if($last!=undefined){
                $(".player-4-3").eq($last).find(".status").css("background","#f6c97d");
                $(".player-4-3").eq($last).find(".sprite").css("opacity",0);
                player[$last].状态="存活";
            }
            kill=$(this).index()+1;
            sessionStorage.kill=$(this).index()+1;
            player[$(this).index()].状态="死亡"; //添加死亡身份
            console.log(player);
            $last=$(this).index();
            console.log("1"+$last);

        }
    });
    
    
    // 点击提交
    $("button").click(function () {
        if($last==undefined){           //判断杀手有没有杀人
            alert("请先选择要杀掉的玩家")
        }
        else {
            gameLog[day-1]={};//新建数组元素创建为对象避免报错
            gameLog[day-1].天数="第"+day+"天";
            console.log(player[0].status);
            gameLog[day-1].晚上="<li>晚上："+kill+"号被杀手杀死，"+kill+"号是"+player[kill-1].status+"</li>";
            gameLog=JSON.stringify(gameLog);
            sessionStorage.gameLog=gameLog;
            //判断杀手或平民是否全灭
            for(var i=0,a=0,b=0;i<player.length;i++){   //a:平民，b:杀手
                if (player[i].status=="平民"&&player[i].状态=="存活"){
                    a++;
                }
                else if(player[i].status=="杀手"&&player[i].状态=="存活"){
                    b++;
                }
            }
            //判断-跳转
            if (a==0){                      //平民全部死亡，跳转杀手胜利
                alert("杀手胜利，游戏结束");
                var gameover=0;             //确定结果页面 0杀手胜利，1平民胜利
                sessionStorage.gameover=gameover;
                location.href="js4-5.html";
            }
            else if(b==0){                  //杀手全部死亡，跳转平民胜利
                alert("平民胜利，游戏结束");
                var gameover=1;             //确定结果页面 0杀手胜利，1平民胜利
                sessionStorage.gameover=gameover;
                location.href="js4-5.html";

            }
            else{//如果下方内容放到if外部，胜利后的页面跳转不会正确跳转，会跳转到js4-4
                player=JSON.stringify(player); //转换为JSON字符串
                sessionStorage.obj = player;
                var js4_4Gamelog=1;           //用来标记所跳转的js4-4所需生成讨论页面还是投票结果页面
                sessionStorage.js4_4=js4_4Gamelog;
                location.href="js4-4.html";
            }
        }
    });
}


// 投票页面代码
function js4_3Log2() {
    // 生成玩家身份
    var $box=$(".game");
    for(var i=0;i<player.length;i++){
        var $li=$("<li class='player-4-3'></li>");
        var $role=$("<div class='role'></div>");
        var $playerStatus   =$("<div class='status'>"+player[i].status+"</div>");
        var $playerName     =$("<div class='name'>"+player[i].name+"号</div>");
        var $sprite         =$('<ul class="sprite"> <li></li> <li></li> <li></li> <li></li> </ul>')
        $box.append($li);
        $li.append($role);
        $role.append($playerStatus);
        $role.append($playerName);
        $li.append($sprite);
        if (player[i].状态=="死亡"){
            $playerStatus.css("background","#83b09a");
        }
    }

// 点击杀人
    var $last;
    $(".player-4-3").click(function () {
        console.log("现在点击");                        //31-33无意义，测试用
        var $boxStatus=$(this).find(".status").text();
        console.log($boxStatus);
        // 判断当前玩家是否死亡
        if(player[$(this).index()].状态=="死亡"){
            alert("提示：该玩家已死亡，请选择其他玩家");
        }
        else {
            $(this).find(".status").css("background","#83b09a");//点击效果
            $(this).find(".sprite").css("opacity",1);
            console.log("2"+$last);
            if($last!=undefined){
                $(".player-4-3").eq($last).find(".status").css("background","#f6c97d");
                $(".player-4-3").eq($last).find(".sprite").css("opacity",0);
                player[$last].状态="存活";
            }
            kill=$(this).index()+1;
            sessionStorage.kill=$(this).index()+1;
            player[$(this).index()].状态="死亡"; //添加死亡身份
            console.log(player);
            $last=$(this).index();
            console.log("1"+$last);
        }
    });
    // 点击按钮提交
    $("button").click(function () {
            if($last==undefined){           //判断玩家有没有投票
                alert("请先选择投票的对象")
            }
            else {
                // gameLog[day-1]={};//新数组元素创建为对象；避免报错
                gameLog[day-1].天数="第"+day+"天";
                gameLog[day-1].白天="<li>白天："+kill+"号被全民投票投死，"+kill+"号是"+player[kill-1].status+"</li>";
                gameLog=JSON.stringify(gameLog);
                sessionStorage.gameLog=gameLog;
                //判断游戏是否结束
                for(var i=0,a=0,b=0;i<player.length;i++){   //a:平民，b:杀手
                    if (player[i].status=="平民"&&player[i].状态=="存活"){
                        a++;
                    }
                    else if(player[i].status=="杀手"&&player[i].状态=="存活"){
                        b++;
                    }
                }
                if (a==0){
                    alert("杀手胜利游戏结束");
                    var gameover=0;             //确定结果页面 0杀手胜利，1平民胜利
                    sessionStorage.gameover=gameover;
                    location.href="js4-5.html";
                }
                else if(b==0){
                    alert("平民胜利游戏结束");
                    var gameover=1;             //确定结果页面 0杀手胜利，1平民胜利
                    sessionStorage.gameover=gameover;
                    location.href="js4-5.html";
                }
                else{                   //游戏没有结束正常进行
                    player=JSON.stringify(player);      //转换为JSON字符串
                    sessionStorage.obj = player;        //页面储存
                    var js4_4Gamelog=2;                //用来标记所跳转的js4-4所需生成讨论页面还是投票结果页面
                    sessionStorage.js4_4=js4_4Gamelog;  //页面储存
                    location.href="js4-4.html";
                }
            }
    });
}
