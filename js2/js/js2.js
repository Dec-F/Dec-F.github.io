// 点击设置生成分配人数
var playernum;
var numBox;
// 判断人数
function makeing() {            //点击设置判断输入数字是否符合要求
    playernum=document.getElementById("playernum").value;
    if(playernum<4||playernum>18){
        alert("请输入4-18以内的数字")
    }
    else {
        status();
    }
}
// 分配身份
function status() {
    var killernum=Math.floor(playernum/4);  //计算杀手数量
    var people=[playernum];                 //生成玩家数组
    var people1=[playernum];
    for(var i=0;i<playernum;i++){
        people1[i]=i;
        people[i]=i;
        people[i]={name:i+1,status:"平民",状态:"存活"};
    }
    console.log("杀手数量"+killernum+"玩家数组"+people);
    console.log(people);
    var killer=[killernum];                  //生成杀手数组存放杀手序号
    for(var x=0;x<killernum;x++){
        killer[x]=people1[Math.floor(Math.random()*people1.length)];
        console.log("玩家"+(killer[x]+1)+"为杀手");
        console.log("people1="+people1);
        people1.splice(killer[x],1);
        console.log("people1删除后="+people1);
        people[killer[x]]={name:killer[x]+1,status:"杀手",状态:"存活"};
    }
    console.log(people);
    // 输出身份
    // var list="";
    // for(var a=0;a<playernum;a++){
    //     list=list+"<li>"+"玩家"+people[a].name+"的身份是"+people[a].status+"</li>"+"<br>";
    //     document.getElementById("role").innerHTML=list;
    // }


    //输出方式2
    // for (var a=0;a<playernum;a++){
    //     var output1=document.getElementById("role");
    //     var output_li = document.createElement('li');
    //     output_li.class="li";
    //     output_li.innerText="玩家"+people[a].name+"的身份是"+people[a].status;
    //     output1.appendChild(output_li);
    // }
    // 输出方式3
    var output_li2=document.createDocumentFragment();//通过创建文档碎片.createDocumentFragment()添加li
    for (var a=0;a<playernum;a++){
        var output1=document.getElementById("role");
        var output_li = document.createElement('li');
        output_li.innerText="玩家"+people[a].name+"的身份是"+people[a].status;
        output_li2.appendChild(output_li);
    }
    output1.appendChild(output_li2);

    numBox = JSON.stringify(people); //转换为JSON字符串
    sessionStorage.obj = numBox;
}

function  next() {
    if(numBox==null){
        alert("请输入游戏人数并点击设置分配角色后再发牌");
    }
    else {
    location.href="../js3/js3.html";
    }
}
