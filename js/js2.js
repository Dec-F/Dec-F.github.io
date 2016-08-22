function setting() {
    var playernum = document.getElementById("players").value;
    if (playernum < 4 || playernum > 18) {
        alert("请输入4到18之间的玩家数")
    } else {
        allocation()
    }
    function allocation() {
        var player = new Array(playernum);
        for (var i = 0; i < playernum; i++) {
            player[i] = {
                name: i + 1,
                status: '平民'
            }
        }
        var num = Math.floor(playernum / 4);
        var killernum;
        for (var j = 0; j < num; j++) {
            killernum=Math.floor(Math.random()*playernum);
            player[killernum]={
                name:killernum+1,
                status: '杀手'
            };
            console.log(player);
            console.log(num)
        }
        // 输出角色文本
        for(k=0;k<playernum;k++){
            var x=player[k].name;
            var y=player[k].status;
            var node=document.getElementById('role');
            var cre_ele=document.createElement('li');
            var cre_text=document.createTextNode("玩家"+ x + "是" + y + '。');
            cre_ele.appendChild(cre_text);
            node.appendChild(cre_ele)

        }
        sessionStorage.player=JSON.stringify(player);
        console.log(sessionStorage.player)
    }

}