const messages = [
  "ここは JavaScript で文章が変わるエリアです。",
  "ボタンを押すと文字が変わるので、JavaScript の練習に使えます。",
  "次は自分の作品タイトルやプロフィール文に置き換えてみましょう。",
];

const button = document.getElementById("change-message");
const message = document.getElementById("message");

let index = 0;

if (button && message) {
  button.addEventListener("click", () => {
    index = (index + 1) % messages.length;
    message.textContent = messages[index];
  });
}
