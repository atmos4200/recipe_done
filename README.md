# コイヨミ

Next.js + Tailwind CSSで作成した、恋愛占いWebアプリ「コイヨミ」のMVPです。

## 機能

- トップページ
- 自分の恋愛タイプ診断フォーム
- 相手との相性診断フォーム
- LINE/DM文面の添削フォーム
- 仮データによる診断結果表示ページ

## 開発コマンド

```bash
npm install
npm run dev
npm run lint
npm run build
```

## 拡張しやすい構成

- `lib/forms.ts`: フォーム定義。AI API接続時はフォームIDごとのプロンプト生成に利用できます。
- `data/mockResult.ts`: 仮診断結果。DB/APIレスポンス型に置き換えやすい構成です。
- `components/`: UIを画面単位・カード単位に分割し、Stripe課金導線やAI結果表示を追加しやすくしています。
