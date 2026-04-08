# Portfolio

`Next.js` で作っているポートフォリオサイトです。
ローカルで確認しながら編集できるように、VSCode のデバッグ設定も入れています。

## ローカルで確認する方法

### ターミナルから起動

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと確認できます。
コミットや push をしなくても、保存した内容がローカルで反映されます。

### VSCode から起動

`.vscode/launch.json` を入れてあるので、VSCode の `Run and Debug` から次が使えます。

- `Next.js: dev server`
  開発サーバーだけ起動
- `Next.js: browser`
  すでにサーバーが立っている状態でブラウザを開く
- `Next.js: full stack`
  サーバー起動とブラウザ起動をまとめて実行

いちばん簡単なのは `Next.js: full stack` を選んで `F5` です。

## 主に触るファイル

- `src/app/page.tsx`
  トップページの内容
- `src/app/layout.tsx`
  タイトルや説明文などの共通設定
- `src/app/globals.css`
  全体の配色や余白、アニメーション

## 公開前の確認

```bash
npm run lint
npm run build
```

## 補足

- ローカル確認だけなら commit は不要です。
- Netlify に反映したいときだけ `git push` します。
- Google 検索向けの `robots.txt` と `sitemap.xml` は Next.js 側で生成しています。
