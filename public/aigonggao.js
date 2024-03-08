document.addEventListener('DOMContentLoaded', function() {
    // 创建<link>元素并添加外部CSS文件
    var cssLink = document.createElement("link");
    cssLink.href = "https://cdn.staticfile.net/mdui/1.0.2/css/mdui.min.css";
    cssLink.rel = "stylesheet";
    document.head.appendChild(cssLink);

    // 创建<script>元素并添加外部JS文件
    var jsScript = document.createElement("script");
    jsScript.src = "https://cdn.staticfile.net/mdui/1.0.2/js/mdui.min.js";
    document.body.appendChild(jsScript);

    // 在加载完外部JS文件后执行你的其他逻辑
    jsScript.onload = function() {
        mdui.dialog({
            title: '<font color="blue">通知</font>',
            content: '<font color="red" size=5>偏爱AI完全免费使用。</font><br /><br /><font color="red">已对违规词进行屏蔽处理。</font><br /><h2><font color="blue">本站中转接口由木子聚合API免费赞助提供</font></h2><br />木子聚合API: <a href="https://muziai.mom"><font color="#e91e63">https://muziai.mom</font></a>&nbsp;',
            buttons: [
                {
                    text: '我明白了',
                    onClick: function(inst) {
                        location.hash = location.hash.replace('mdui-dialog', '');
                    }
                }
            ],
            modal: true
        });
    };
});
