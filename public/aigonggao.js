document.addEventListener('DOMContentLoaded', function() {
    mdui.dialog({
        title: '<font color="blue">通知</font>',
        content: '<font color="red" size=5>偏爱AI完全免费使用。</font><br /><br /><font color="red">已对违规词进行屏蔽处理。</font><br /><h2><font color="blue">本站中转接口由木子聚合API免费赞助提供</font></h2><br />木子聚合API: <a href="https://muziai.mom"><font color="#e91e63">https://muziai.mom</font></a>&nbsp;',
        buttons: [
            {
                text: '我明白了',
                onClick: function(inst) {
                    location.hash = location.hash.replace('mdui-dialog', '');
                }
            },
            // {
            //     text: '前往首页',
            //     onClick: function(inst) {
            //         window.open("https://mirror.tomys.top");
            //     }
            // }
        ],
        modal: true
    });
});
