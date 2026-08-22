// 【機能1】ダークモードの切り替え
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 以前サイトを訪れた時の設定（ローカルストレージ）があれば適用
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);
}

// ボタンをクリックした時の処理
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // テーマを切り替えて保存
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
});

// ボタンの文字を切り替える関数
function updateButtonText(theme) {
    if (theme === 'dark') {
        themeToggleBtn.textContent = '☀️ ライトモード';
    } else {
        themeToggleBtn.textContent = '🌙 ダークモード';
    }
}

// 【機能2】プロフィール画像をクリックしたときのアクション
const profileImg = document.getElementById('profile-img');
profileImg.addEventListener('click', () => {
    alert('こんにちは！laryuです。\nプログラミングの勉強がんばります！\nスト6のお誘いもお待ちしてます🎮');
});
