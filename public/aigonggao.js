document.addEventListener('DOMContentLoaded', function() {
    var dialogOverlay = document.createElement('div');
    dialogOverlay.style.position = 'fixed';
    dialogOverlay.style.top = '0';
    dialogOverlay.style.left = '0';
    dialogOverlay.style.width = '100%';
    dialogOverlay.style.height = '100%';
    dialogOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    dialogOverlay.style.display = 'none';
    dialogOverlay.style.zIndex = '9999';
    document.body.appendChild(dialogOverlay);

    var dialogBox = document.createElement('div');
    dialogBox.style.position = 'fixed';
    dialogBox.style.top = '50%';
    dialogBox.style.left = '50%';
    dialogBox.style.transform = 'translate(-50%, -50%)';
    dialogBox.style.backgroundColor = 'white';
    dialogBox.style.padding = '20px';
    dialogBox.style.borderRadius = '5px';
    dialogBox.style.zIndex = '10000';
    dialogBox.innerHTML = '<h2>通知</h2><p>偏爱AI完全免费使用。</p><p>已对违规词进行屏蔽处理。</p><p>本站中转接口由木子聚合API免费赞助提供</p><p>木子聚合API: <a href="https://muziai.mom">https://muziai.mom</a></p><button id="closeButton">我明白了</button>';
    dialogOverlay.appendChild(dialogBox);

    var closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function() {
        dialogOverlay.style.display = 'none';
    });

    dialogOverlay.style.display = 'block';
});
