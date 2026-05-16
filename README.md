# コイヨミ

Next.js + Tailwind CSSで作成した、恋愛占いWebアプリ「コイヨミ」のMVPです。

## 機能

- トップページ
- 自分の恋愛タイプ診断フォーム
- 相手との相性診断フォーム
- LINE/DM文面の添削フォーム
- 仮データによる診断結果表示ページ

## ローカル環境で起動する手順（初心者向け）

### 1. 事前準備

まず、PCに以下が入っているか確認してください。

- Node.js
- npm（Node.jsを入れると一緒に入ります）

ターミナル（Mac）またはPowerShell / コマンドプロンプト（Windows）で、次のコマンドを実行します。

```bash
node -v
npm -v
```

バージョン番号が表示されればOKです。表示されない場合は、Node.jsをインストールしてください。

### 2. プロジェクトのフォルダへ移動する

このREADME.mdがあるフォルダへ移動します。

```bash
cd /path/to/recipe_done
```

`/path/to/recipe_done` の部分は、自分のPCでこのプロジェクトを置いた場所に置き換えてください。

### 3. 必要なパッケージをインストールする

初回だけ、次のコマンドを実行します。

```bash
npm install
```

このコマンドで、Next.js、React、Tailwind CSSなど、アプリの起動に必要なパッケージがインストールされます。

### 4. 開発サーバーを起動する

インストールが終わったら、次のコマンドを実行します。

```bash
npm run dev
```

起動に成功すると、ターミナルに次のようなURLが表示されます。

```text
http://localhost:3000
```

### 5. ブラウザで確認する

Google Chrome、Safari、Microsoft Edgeなどのブラウザを開き、アドレスバーに次のURLを入力します。

```text
http://localhost:3000
```

「コイヨミ」のトップページが表示されれば起動成功です。

フォームを入力して送信すると、仮の診断結果ページへ移動します。まだOpenAI APIやDBには接続していないため、表示される診断結果はサンプルデータです。

### 6. 開発サーバーを止める

起動中のターミナルで、次のキーを押します。

```text
Ctrl + C
```

「終了しますか？」のような確認が出た場合は、`y` を入力してEnterを押してください。

## よくあるエラーと対処方法

### `npm: command not found` または `npm は認識されていません`

npmがPCに入っていない、またはパスが通っていない状態です。

対処方法:

1. Node.jsをインストールします。
2. ターミナルを一度閉じて、もう一度開きます。
3. `node -v` と `npm -v` を再実行します。

### `next: command not found` または `next は認識されていません`

必要なパッケージがまだインストールされていない可能性があります。

対処方法:

```bash
npm install
npm run dev
```

それでも直らない場合は、`node_modules` と `package-lock.json` を削除してから再インストールします。

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

WindowsのPowerShellでは、次のように削除できます。

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
npm run dev
```

### `EADDRINUSE` または `Port 3000 is already in use`

すでに別のアプリが `localhost:3000` を使っています。

対処方法:

- ほかに起動している `npm run dev` のターミナルを止めます。
- もしくは、表示された別のポート番号で確認します。例: `http://localhost:3001`

### ブラウザで `localhost:3000` が開けない

開発サーバーが起動していない、または起動途中の可能性があります。

対処方法:

1. ターミナルで `npm run dev` が実行中か確認します。
2. エラーが出ていないか確認します。
3. 起動完了の表示が出てから、ブラウザを再読み込みします。

### `npm install` でエラーが出る

ネットワーク、npm registry、またはキャッシュが原因の場合があります。

対処方法:

```bash
npm cache clean --force
npm install
```

会社や学校のネットワークで失敗する場合は、別のネットワークで試すか、プロキシ設定が必要か確認してください。

### 画面デザインが崩れている

Tailwind CSSなどの依存関係が正しく入っていない可能性があります。

対処方法:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

その後、ブラウザを再読み込みしてください。

## 開発コマンド

```bash
npm install
npm run dev
npm run lint
npm run build
```

- `npm install`: 必要なパッケージをインストールします。
- `npm run dev`: ローカル開発サーバーを起動します。
- `npm run lint`: コードの書き方や問題をチェックします。
- `npm run build`: 本番公開用にビルドできるか確認します。

## 拡張しやすい構成

- `lib/forms.ts`: フォーム定義。AI API接続時はフォームIDごとのプロンプト生成に利用できます。
- `data/mockResult.ts`: 仮診断結果。DB/APIレスポンス型に置き換えやすい構成です。
- `components/`: UIを画面単位・カード単位に分割し、Stripe課金導線やAI結果表示を追加しやすくしています。
