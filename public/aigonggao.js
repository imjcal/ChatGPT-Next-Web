document.addEventListener('DOMContentLoaded', function() {
    var dialogOverlay = document.createElement('div');
    dialogOverlay.style.position = 'fixed';
    dialogOverlay.style.top = '0';
    dialogOverlay.style.left = '0';
    dialogOverlay.style.width = '100%';
    dialogOverlay.style.height = '100%';
    dialogOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    dialogOverlay.style.display = 'flex';
    dialogOverlay.style.justifyContent = 'center';
    dialogOverlay.style.alignItems = 'center';
    dialogOverlay.style.zIndex = '9999';
    document.body.appendChild(dialogOverlay);

    var dialogBox = document.createElement('div');
    dialogBox.style.position = 'relative';
    dialogBox.style.backgroundColor = '#f9f9f9';
    dialogBox.style.padding = '20px';
    dialogBox.style.borderRadius = '10px';
    dialogBox.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    dialogBox.style.zIndex = '10000';
    dialogBox.innerHTML = '<h2 style="color: #333; font-size: 24px; margin-bottom: 10px;">通知</h2><p style="color: #666; font-size: 16px; margin-bottom: 20px;">偏爱AI完全免费使用。</p><p style="color: #666; font-size: 16px; margin-bottom: 20px;">已对违规词进行屏蔽处理。</p><p style="color: #666; font-size: 16px; margin-bottom: 20px;">本站中转接口由木子聚合API免费赞助提供</p><p style="color: #666; font-size: 16px; margin-bottom: 20px;">木子聚合API: <a href="https://muziai.mom" style="color: #007bff; text-decoration: none;">https://muziai.mom</a></p>';
    dialogOverlay.appendChild(dialogBox);

    var closeButton = document.createElement('button');
    closeButton.textContent = '我明白了';
    closeButton.style.position = 'absolute';
    closeButton.style.right = '10px';
    closeButton.style.bottom = '10px';
    closeButton.style.background = '#007bff';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px 20px';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '16px';
    closeButton.addEventListener('click', function() {
        dialogOverlay.style.display = 'none';
    });
    dialogBox.appendChild(closeButton);

    dialogOverlay.style.display = 'flex';
});
